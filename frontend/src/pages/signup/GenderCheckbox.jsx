

const GenderCheckbox = ({handleGenderChange,selectedGender}) => {
  return (
    <div className="flex">
      {/* <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
            <span className="label-text">Male</span>
            <input type="checkbox" className="checkbox border-slate-900"></input>
        </label>
      </div> */}
            <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender == "male"?"selected":""}`}>
            <span className="label-text">Male</span> 
            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" checked={selectedGender === "male"} onChange={()=>handleGenderChange("male")}/>
        </label>
        </div>
        <div className="form-control">
  <label className={`cursor-pointer gap-2 label ${selectedGender == "female"?"selected":""}`}>
    <span className="label-text">Female</span>
    <input type="checkbox" defaultChecked className="checkbox checkbox-secondary"  checked={selectedGender === "female"} onChange={()=>handleGenderChange("female")} />
  </label>
</div>
    </div>
  )
}

export default GenderCheckbox
