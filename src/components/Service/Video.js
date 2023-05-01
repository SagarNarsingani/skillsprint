import services from '../../services.json'
import { ServiceCard } from './ServiceCard'

export const Video = () => {
    const data = services.filter(service => service.type==='video')
    
    return (
      <div>
        { data.map(service => <ServiceCard service={service}/>) }
      </div>
    )
}