export default function InputItem(props) {
  return (
    <input
      required
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      type="text"
      className="md:block rounded-lg text-sm bg-white text-slate-500 placeholder-slate-500 focus:ring-sky-200 focus:ring-2 border-none"
    />
  );
}
