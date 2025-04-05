export default function Button({onClick, data }) {
  return (
      <button onClick={onClick} className="button">{data}</button>
  );
}
