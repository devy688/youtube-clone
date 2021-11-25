class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
    this.videoList = [];
  }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });

    await response.data.items.map((item) =>
      this.getChannelInfo(item.snippet.channelId).then((imageURL) =>
        this.videoList.push({
          ...item,
          channelImgURL: imageURL,
        })
      )
    );

    return this.videoList;
  }

  async getChannelInfo(channelId) {
    const response = await this.youtube.get("channels", {
      params: {
        part: "snippet",
        id: channelId,
      },
    });

    return response.data.items[0].snippet.thumbnails.default.url;
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 25,
        type: "video",
        q: query,
      },
    });

    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
