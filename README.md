# React Scan-Face Example
```
 1. Load Folder Models for
    https://github.com/basza5029/lib-scan-face/tree/main/public
 
 2. Copy Folder Models paste in Public
```


## Example Code
```js

function App() {
  let menuRef:any = useRef();
  const modal = document.getElementById("modal");
  const [show,setShow] = useState("none");


  const clickShow = () =>{
    if (show === "none"){
      setShow("block");
    }else{
      setShow("none");
    }
  }

  useEffect(()=>{
    let handler = (e:any)=>{     
      if(e.target === modal){
        setShow("none");
      }   
    };
    document.addEventListener("mousedown", handler);
    return() =>{
      document.removeEventListener("mousedown", handler);
    }
  },[show])

  return (
    <div className="App">
      <div ref={menuRef}>
        <button onClick={clickShow}> Cool Button?</button>
        <ModalScanFace display={show}/>
      </div>     
    </div>
  );
}

export default App;