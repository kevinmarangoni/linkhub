import React,{useState} from 'react'

const Home: React.FC = () => {
  
  const [inputs, setInputs] = useState({
    long: "",
    generated: "",
  })
  
  return (
    <div>
      <div>
        <input type={"text"} name={"long"} onChange={(e)=>{
          setInputs({...inputs, [e.target.name]: e.target.value})
        }}/>
        <button type="button">Gerar link</button>
      </div>
      <div>
        <input type={"text"} name={"generated"} value={inputs.generated} />
      </div>
    </div>
  )
}

export default Home