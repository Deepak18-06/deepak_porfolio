export default function PhotoAvatar() {
  return (
    <div className="avatar-wrapper">
      <img
        className="avatar-img avatar-img--primary"
        src="./photos/avatar-primary.jpg"
        alt="Deepak"
      />
      <img
        className="avatar-img avatar-img--hover"
        src="./photos/avatar-hover.jpg"
        alt="Deepak"
      />
      <div className="avatar-ring" />
    </div>
  );
}
