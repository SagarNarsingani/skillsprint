import services from '../../services.json'
import { ServiceCard } from './ServiceCard'

export const Webinar = () => {
    const data = services.filter(service => service.type==='webinar')
    
    return (
      <div>
        { data.map(service => <ServiceCard service={service}/>) }
      </div>
    )
}