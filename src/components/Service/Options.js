export const Options = ({handleChange, showCustom, handleCustomChange, service, section}) => {
  return (
    <div className="form-section">
        <h4 className="form-section-title">{section.title}</h4>
        {
            section.data.map(item => {
                return (
                    <div 
                        key={item.id} 
                        onClick={_ => handleChange(section.key, item.val + ' ' + item.unit)}
                        className={
                            'service-opt-box' + 
                            (((showCustom && item.val==='Custom') || (item.val + ' ' + item.unit===service[section.key]))
                            ? ' option-active' 
                            : '')
                        }
                    >  
                        {item.val!=='Custom' ? item.val + ` ${item.unit}` : 'Custom'}
                    </div>
                )
            })
        }

        {
            showCustom && 
            <div className="form-section">
                <h6 className="form-section-title">Custom Service {section.title}</h6>
                <input 
                    className="form-input-box" 
                    value={service[section.key]} 
                    onChange={e => handleCustomChange(section.key, e.target.value)} 
                    type="text"
                />
            </div>
        }
    </div>
  )
}
