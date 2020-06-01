import React , {Component} from 'react'

import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux'

//selon moi faut le changer en class-based component pour implémenter la méthode hide (true -> cache le modal)


const withErrorHandler = (WrappedComponent, axios) => {
    
    return class extends Component{

        state = {
            error : null 
        }

        componentDidMount(){
            axios.interceptors.request.use(request => {
                this.setState({error : null})
                return request
            })
            axios.interceptors.response.use(
                response => response, 
                error => this.setState({error : error})
            )
        }

        modalHandle = (hide) => { 
            this.setState({ error : null})
        }

        render(){
            return(
                <Aux>
                    <Modal visible={this.state.error ? true : false} hide={this.modalHandle.bind(this)}>
                        Something went wrong ... {this.state.error ? this.state.error.message : ''}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
}


export default withErrorHandler 