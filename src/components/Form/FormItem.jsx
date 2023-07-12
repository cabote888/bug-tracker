export default function FormItem(props) {
  return (
    <form onSubmit={props.onSubmit} className="grid grid-cols-1 gap-y-7 md:gap-x-5 md:gap-y-10">
      {props.children}
    </form>
  );
}
