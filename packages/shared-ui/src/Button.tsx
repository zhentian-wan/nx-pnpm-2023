export function Button(props: any) {
  return (
    <button style={{ color: "red" }} onClick={() => props.onClick()}>
      {props.children}
    </button>
  );
}

export default Button;
