export default function Search({ setBySearch }) {
  return (
    <div>
      <input type="text" onChange={setBySearch} />
    </div>
  );
}
