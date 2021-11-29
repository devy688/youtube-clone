class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const promises = [];

    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });

    await response.data.items.map((item) =>
      promises.push(
        this.getChannelImg(item.snippet.channelId).then(
          (channelImgURL) => (item.channelImgURL = channelImgURL)
        )
      )
    );

    await Promise.all(promises);

    return response.data.items;
  }

  async getChannelImg(channelId) {
    const response = await this.youtube.get("channels", {
      params: {
        part: "snippet",
        id: channelId,
      },
    });

    return response.data.items[0].snippet.thumbnails.default.url;
  }

  async search(query) {
    const promises = [];

    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: query,
      },
    });

    await response.data.items.map((item) =>
      promises.push(
        this.getChannelImg(item.snippet.channelId).then(
          (channelImgURL) => (item.channelImgURL = channelImgURL)
        )
      )
    );

    await Promise.all(promises);

    return await response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }

  async getVideoDetail(videoId) {
    const response = await this.youtube.get("videos", {
      params: {
        id: videoId,
        part: "snippet",
      },
    });

    return response.data.items[0];
  }
}

export default Youtube;
