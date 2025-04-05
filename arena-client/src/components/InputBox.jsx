export default function InputBox({placeholder, onchange}) {
  return (
      <input onChange={onchange} placeholder={placeholder} type="text" className="input-box"/>
  );
}
