

const GenderCheckbox = () => {
  return (
    <div className="flex">
      {/* <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
            <span className="label-text">Male</span>
            <input type="checkbox" className="checkbox border-slate-900"></input>
        </label>
      </div> */}
            <div className="form-control">
        <label className="label gap-2 cursor-pointer">
            <span className="label-text">Male</span> 
            <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
        </label>
        </div>
        <div className="form-control">
  <label className="cursor-pointer gap-2 label">
    <span className="label-text">Female</span>
    <input type="checkbox" defaultChecked className="checkbox checkbox-secondary" />
  </label>
</div>
    </div>
  )
}

export default GenderCheckbox
