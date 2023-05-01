import services from '../../services.json'
import { ServiceCard } from './ServiceCard'

export const Text = () => {
    const data = services.filter(service => service.type==='text')
    
    return (
      <div>
        { data.map(service => <ServiceCard service={service}/>) }
      </div>
    )
}