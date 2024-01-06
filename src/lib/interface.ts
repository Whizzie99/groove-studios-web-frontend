export interface LoveStory {
  _id: string;
  title: string;
  slug: {
    current: string;
  }
  previewImage: any;
  shortDescription: string;
  mainImage: any;
  hisStory: any;
  herStory: any;
  youtubeVideoId: string;
  _createdAt: Date;
}