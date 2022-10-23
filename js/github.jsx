class LatestCommitComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        author: "",
        branch: "",
        date: "",
        sha: "",
        link: "",
        error: null
      };
    }
  
    componentDidMount() {
      fetch(
        "https://api.github.com/repos/RGarrido03/RS/branches/main"
      )
        .then(response => {
          response.json().then(json => {
            console.log(json);
            if (json.commit) {
              this.setState({
                author: json.commit.author.login,
                branch: json.name,
                date: json.commit.commit.author.date.split('T',1),
                sha: json.commit.sha,
                link: json._links.html
              });
            } else {
              this.setState({
                error: json.message
              });
            }
          });
        })
        .catch(error => {
          this.setState({
            error: error
          });
          console.log(error);
        });
    }
  
    render() {
      const html = this.state.error ? (
        <div id="error">{this.state.error}</div>
      ) : (
        <div id="date"><b>Last commit:</b> {this.state.date}</div>
      );
  
      return <div>{html}</div>;
    }
  }
  
  ReactDOM.render(<LatestCommitComponent />, document.getElementById("commit"));