// import React,{useState}from 'react'

export default function About(props) {
const myStyle=
{
   color:props.mode==="dark"?"white":"black",
   backgroundColor:props.mode==="dark"?"rgb(29 29 45":"white",
}
  return (
    <>
    <div className='container' style={myStyle}> <h2 >About Us</h2>
    <div className="accordion" id="accordionExample" style={myStyle} >
  <div className="card" >
    <div className="card-header" id="headingOne" style={myStyle} >
      <h2 className="mb-0" >
        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
      
       <strong>  Analyze Your Text</strong> 
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample" style={myStyle}>
      <div className="card-body" >
        Text utils gives you a way to analyze your text quickly and efficiently. BE it word ount character count or 
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo" style={myStyle}>
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={myStyle}>
          
          <strong>  Free to uset</strong> 

        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body" style={myStyle}>
Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree" style={myStyle}>
                <h2 className="mb-0" >
                  <button className="btn btn-link btn-block text-left collapsed"          type="button" data-toggle="collapse"          data-target="#collapseThree" aria-expanded="false"        aria-controls="collapseThree"   style={myStyle}   >
                         <strong> Browser compatible</strong>     </button>
               </h2>
             </div>
              <div id="collapseThree" className="collapse"          aria-labelledby="headingThree" data-parent="#accordionExample">
                <div className="card-body" style={myStyle}>
                This word counter software works in web browsers such as chrome,          Firefox, Internet Explorer ,safari. It suits to count characters          in facebook , blog, books, excel document, pdf documents, essays,         etc.
                </div>
             </div>
  </div>
</div> 
    </div>
   
    </>
  )
}
