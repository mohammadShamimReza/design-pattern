const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

const App = () => {
  return (
    <div>
      <Button label="Click Me" onClick={() => alert("Button clicked!")} />
    </div>
  );
};
