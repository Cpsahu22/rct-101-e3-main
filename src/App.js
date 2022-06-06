import "./App.css";

function App() {
  return (
    <div className="App">
      {
        // Code here
        <CartProvider>
        <navbar/>
        </CartProvider>
      }
    </div>
  );
}

export default App;
