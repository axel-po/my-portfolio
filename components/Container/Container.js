import Nav from "../Nav/Nav";

export default function Container(props) {
  return (
    <>
      <Nav />
      {props.children}
    </>
  );
}
