export default function Dashboard() {
  const veggies = ["Ocumo", "Batata", "Yuca"];

  return (
    <form>
      <select>
        <option value="cock">Choose veggie</option>
        {veggies.map((veggie) => (
          <option key={Math.random()} value={veggie}>
            {veggie}
          </option>
        ))}
      </select>
    </form>
  );
}
