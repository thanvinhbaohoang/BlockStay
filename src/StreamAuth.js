import { Component } from "react";
import axios from "axios";

class StreamAuth extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        isStreamAuthenticated: null,
        address: ""
      };
      this.tokenStreamAuthentication = this.tokenStreamAuthentication.bind(this);
    }

    componentDidMount() {
      // Check Subscription Status Every 5s
      this.tokenStreamAuthentication()
      this.timerID = setInterval(
        () => {
            this.tokenStreamAuthentication();
            console.log("STREAMAUTH.JS: this.state.isStreamAuthenticated: ", this.state.isStreamAuthenticated);
        }, 5000
      );
    }
  
  
    // For now we will stick with FDAIx as default tokenName
    async tokenStreamAuthentication(){
        const address = window.address.toLowerCase()
        //GraphQL Query (https://console.superfluid.finance/subgraph?_network=goerli)
        const TOKENS_QUERY =
        `
        query {
          streams(where:{
                sender: "${address}"
                receiver: "0x45c01ceb87dbe6807ebecb9161408fc5c6acb5d1" 
                }
              ) {
            currentFlowRate
            token 
            {
              symbol
            }
          }
        }
        `
        const queryResult = await axios({
          url: 'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-goerli',
          method: 'post',
          data: {
            query: TOKENS_QUERY
          }
    
        })

        // LAZY WAY TO CHECK IF STREAM EXISTS
        // Check Streams from Address to `ServiceProviderAddress` 
        // Iterate All Streams And If Even 1 Stream   
          // Return True if >= Service Fee
        const streams = queryResult.data.data.streams
        let auth = false;
        // Return TRUE if exist one stream with currentFlowRate > 0
        streams.map( stream => {
          if (stream.currentFlowRate > 0) {
            window.isStreamAuthenticated = auth
            auth = true;
          }
        })
        // Set State of isStreamAuthenticated
        this.setState({ isStreamAuthenticated: auth })
        window.isStreamAuthenticated = auth
        console.log("StreamAuth.js: window.isStreamAuthenticated: ", window.isStreamAuthenticated)
    }
    
    
    
    render() {
      return (
        <div>
          <div class="text-red-600">{this.state.isStreamAuthenticated? ""
          : 
          <div class="text-red-600 font-bold border-4 p-2 rounded-lg">Pay Here To Use Room</div>
          }</div> 
        </div>
        );
    }
  }
  
  export default StreamAuth;