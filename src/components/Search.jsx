export default function Search({ setBySearch }) {
  return (
    <div>
      <input type="text" onChange={() => setBySearch(event)} />
    </div>
  );
}
