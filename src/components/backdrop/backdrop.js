import React from 'react'
import Styles from './backdrop.module.css'
const Backdrop=({toggle,setToggle})=>(
toggle?<div className= {Styles.Backdrop} onClick={()=>setToggle(!toggle)}></div>:null
)
export default Backdrop