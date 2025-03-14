import PostComponent from "../components/PostComponent";

const Posts = () => {
  const mockData = {
    user: {
        userName: "Skeittaaja123",
        url: "google.com",
        pictureData: "ayylmao1231sjdhgnfskjdgb" // base64
    },
    img: "base64eioo", // base64
    title: "Ilmoitusluontoinen asia",
    text: "Moro, tässä minun ensimmäinen skate-postaus!",
    filters: ['Front Side Ollie', 'Freak Accident', 'Funeral'],
    comments: []
}
  return (
    <>
      <h2>Posts</h2>
      <PostComponent
        {...mockData}
      />
    </>
  );
};
export default Posts;
