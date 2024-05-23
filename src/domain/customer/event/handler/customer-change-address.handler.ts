import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerAddress from "../customer-address.event";

export default class CustomerChangeAddressHandler implements EventHandlerInterface<CustomerAddress> {
  
  handle(event: CustomerAddress): void {
    console.log(`Endereço do cliente: {id}, {nome} alterado para: {endereco}`)
  }

}