var store = {
	activeQuestion: 0,
	okGotIt: 0
};
var App = React.createClass({
	getInitialState: function() {
		return store;
	},
	changeCenter: function(id) {
		store.activeQuestion = id;
		this.setState(store);
	},
	render: function() {
		return(
		<div>
			<Drawer changeCenter={this.changeCenter}
						  questions={this.props.questions}
						  activeQuestion={this.state.activeQuestion} />
			<Center activeQuestion={this.state.activeQuestion}
						  questions={this.props.questions}
						  okGotIt={this.state.okGotIt} 
						  changeCenter={this.changeCenter} />					  
		</div>
		);
	}
});
var Drawer = React.createClass({

	getInitialState: function() {
		return {showLogin: false};
	},
	onClick: function() {
		this.setState({show})
	},
	render: function() {
		var questionTitles = [];
		for (var i=0; i < this.props.questions.length; i++) {
			questionTitles.push(<QuestionLink changeCenter={this.props.changeCenter}
																				questions={this.props.questions}
																				activeQuestion={this.props.activeQuestion}
													  						id={this.props.questions[i].id}
													  						title={this.props.questions[i].title} />); 
		}
		return(
			<div className="fixed drawer mui--hidden-xs mui-col-sm-3 mui-col-lg-2">
				<header>
					<h3>
						<a href="#">
							GraphWhy.org
						</a>
					</h3>
				</header>
				<div className="mui-divider"></div>
				<br/>
				<ul>
					<SigninButton />
					<li className='category questions'><b>Questions</b></li>
					<ul className='sub'>
						{questionTitles}
					</ul>
					</ul>
			</div>
		);
	}
});

var Footer = React.createClass({
	getInitialState: function() {
		return {showLogin: false};
	},
	onClick: function() {
		this.setState({show})
	},
	render: function() {
		var questionTitles = [];
		console.log(this.props.questions);
		for (var i=0; i < this.props.questions.length; i++) {
			questionTitles.push(<QuestionLink changeCenter={this.props.changeCenter}
																				questions={this.props.questions}
																				activeQuestion={this.props.activeQuestion}
													  						id={this.props.questions[i].id}
													  						title={this.props.questions[i].title} />); 
		}
		return(
			<div className="drawer footer mui-col-xs-12 mui--hidden-sm mui--hidden-md mui--hidden-lg">
				<header className='menuHeader'>
					<h3>
						<a href="#">
							GraphWhy.org
						</a>
					</h3>
				</header>
				<div className="mui-divider"></div>
				<ul>
					<SigninButton />
					<li className='category questions'><b>Questions</b></li>
					<ul className='sub'>
						{questionTitles}
					</ul>
					</ul>
			</div>
		);
	}
});
var QuestionLink = React.createClass({
	handleClick: function(id) {
		var self = this;
		return function() {
			self.props.changeCenter(id);
		}
	},
	render: function() {
		
		//var title = this.props.title;
		var activeQuestion = this.props.activeQuestion;
		var check = this.props.questions[activeQuestion].title;
		if (this.props.title == check) {
			if (this.props.title == "About Us") {
				return (
					<a  className='highlight' href='#'><li className="fakeRoot highlight" onClick={ this.handleClick(this.props.id) }>{this.props.title}</li></a>
				);
			} else {
				return(
					<li onClick={ this.handleClick(this.props.id) }><a  className='highlight' href='#'>{this.props.title}</a></li>
				);
			}
		} else {
			if (this.props.title == "About Us") {
				return (
					<a href='#'><li className="fakeRoot" onClick={ this.handleClick(this.props.id) }>{this.props.title}</li></a>
				);
			} else {
				return(
					<li onClick={ this.handleClick(this.props.id) }><a href='#'>{this.props.title}</a></li>
				);
			}
		}
	  }
});

var Center = React.createClass({
	// this.props.activeQuestion
	render: function() {
		console.log(this.props.questions);
		return(
			<div className="center mui-col-xs-12 mui-col-sm-9 mui-col-lg-10">
				<Header activeQuestion={this.props.activeQuestion}
								questions={this.props.questions}
								visitor={this.props.visitor} />
				<Banner okGotIt={this.props.okGotIt} />
				<Main activeQuestion={this.props.activeQuestion}
							questions={this.props.questions} 
							visitor={this.props.visitor} />
				<Footer changeCenter={this.props.changeCenter}
						  questions={this.props.questions}
						  activeQuestion={this.props.activeQuestion}/>	
			</div>
		);
	}
});
var Banner = React.createClass({
	getInitialState: function() {
		return { okGotIt: true };
	},
	onClick: function() {
		this.setState({okGotIt: !this.state.okGotIt});
	},
	render: function() {
		if (this.state.okGotIt == true) {
			return(
				<div className="banner">
					<div className="bubbleContainer">
						<h3 className="bubble">GraphWhy</h3>
					</div>
					<span onClick={this.onClick} className="close">X</span>
					<div className="taglineContainer">
					<br/><br/>
						<h5>The public opinion database</h5>
						<h5>Help fight misunderstanding</h5>
					</div>
				</div>
			);
		} else {
			return (
					<div><br/></div>
			);
		}

	}
});
var Header = React.createClass({
	render: function() {
		var activeQuestion = this.props.activeQuestion;
		//is there a way to read the route in jsx?
		return(
			<header className="fixed header">
 				<h3>{this.props.questions[activeQuestion].category} > {this.props.questions[activeQuestion].breadcrumb}</h3>
			</header>
		);
	}
});
var Main = React.createClass({
	render: function() {
		var activeQuestion = this.props.activeQuestion;
		return(
			<div className="main mui-row"><br/>
				<Question activeQuestion={this.props.activeQuestion}
								  questions={this.props.questions} />
			</div>
		);
	}
});

var Question = React.createClass({
	getInitialState: function() {
      return {
        questions: this.props.questions
    	};
    },
	incrementVote: function(){
		var tempstate = this.state;
		tempstate.questions[this.props.activeQuestion].votes[
		this.props.questions[

		this.props.activeQuestion].options.length-
		$('input[name=radioName]:checked', '#myForm').val()-1

		]++;
		this.setState(tempstate);
	
	},
	render: function() {
		var activeQuestion = this.props.activeQuestion;
		if (this.props.questions[activeQuestion].title == "About Us") {
		return (
			<div className="mui-col-xs-12 mui-col-sm-10 mui-col-sm-offset-1"><br/>
				<h1 className='mainHeader'> {this.props.questions[activeQuestion].title} </h1>
				<Comments activeQuestion={this.props.activeQuestion}
								  questions={this.props.questions}/>
			</div>
		);
		} else {
		return(
			<div className="mui-col-xs-12 mui-col-sm-10 mui-col-sm-offset-1"><br/>
				<h1 className='mainHeader'> {this.props.questions[activeQuestion].title} </h1>
				<VoteField activeQuestion={this.props.activeQuestion}
									 questions={this.props.questions} func={this.incrementVote}/>
				<Data activeQuestion={this.props.activeQuestion}
							questions={this.state.questions}/>
				<Comments activeQuestion={this.props.activeQuestion}
								  questions={this.props.questions}/>
			</div>
		);
		}
	}
});
var VoteField = React.createClass({
	render: function(){
		var activeQuestion = this.props.activeQuestion;
		var	options = [];
		for (var i=0; i < this.props.questions[activeQuestion].options.length; i++){
			options.push(<RadioOption options={this.props.questions[activeQuestion].options[i]} index={i}/> );
		}
		return(
			<div className="box">
					<form id="myForm">
						{options}
					</form>
					<hr/>
					<span className='mui--pull-right'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
				  <button className="mui-btn mui-btn--small mui-btn--primary mui--pull-right" onClick={this.props.func}>Submit</button>

				  <div className="mui--clearfix">
					  <div className="warningBox mui--hidden-xs">
					  	<span className='warning '> Please sign in to the left.</span>
					  </div>
					  <div className='warningBox mui--hidden-sm mui--hidden-md mui--hidden-lg'>
					  	<span className='warning '> Please sign in to the below.</span>
					  </div>
				  </div>
			</div>
		);
	}
});
var RadioOption = React.createClass({
	render: function() {
		return(
			<div className="mui-radio">
				<label>
						<input value={this.props.index} name="radioName" type="radio"/>
							{this.props.options}
				</label>
			</div>
		);
	}
});

var Data = React.createClass({
	render: function(){
		var activeQuestion =  this.props.activeQuestion;
		var data = [];
		for (var i=0; i < this.props.questions[activeQuestion].votes.length; i++){
			data.push(this.props.questions[activeQuestion].votes[i]);
			var x = 0;
			if (i > 0) {
				x = i * 18;
			}
		}
		console.log(data)
		return(
			<div className='box graph'>
				<div className='labelTEMP'>
					<span>A</span>
					<span>B</span>
					<span>C</span>
					<span>D</span>
					<span>E</span>
				</div>
				<div className='centerSVG'>
				<Chart className='centerSVG' width='450px' height='200px'>
					<DataSeries data={data}
									//	  questions={this.props.questions}
									//	  activeQuestion={this.props.activeQuestion}
										  width='300' height='200' color="#3F51B5" /> 
				</Chart>
				</div>
				<div className='tallyTEMP extraTOP'>
					{this.props.questions[activeQuestion].votes[4]} votes
				</div>
				<div className='tallyTEMP'>
					<span className='inlineSPAN'>{this.props.questions[activeQuestion].votes[3] } votes</span>
				</div>
				<div className='tallyTEMP'>
					<span className='inlineSPAN'>{this.props.questions[activeQuestion].votes[2]} votes</span>
				</div>
				<div className='tallyTEMP'>
					<span className='inlineSPAN'>{this.props.questions[activeQuestion].votes[1]} votes</span>
				</div>
				<div className='tallyTEMP'>
					<span className='inlineSPAN'>{this.props.questions[activeQuestion].votes[0]} votes</span>
				</div>
				<span className='mui--clearfix'></span>
			</div>
		);
	}
}); 


var DataSeries = React.createClass({
  getDefaultProps: function() {
    return {
      title: '',
      data: []
    }
  },
  render: function() {
    var props = this.props;
    var xScale = d3.scale.linear()
      .domain([0, d3.max(this.props.data)])
      .range([0, 180]);
    var yScale = d3.scale.ordinal()
      .domain(d3.range(this.props.data.length))
      .rangeRoundBands([0, this.props.height], 0.05);

     console.log(this.props.data);

    var bars = _.map(this.props.data, function(point, i) {
      return (
        <Bar width={xScale(point)} height={yScale.rangeBand()} offset={yScale(i)} availableHeight={props.height} color={props.color} key={i} />
      )
    });
    return (
      <g>{bars}</g>
    );
  }
});
var Bar = React.createClass({
  getDefaultProps: function() {
    return {
      width: 0,
      height: 0,
      offset: 0
    }
  },
  render: function() {
    return (
      <rect fill={this.props.color}
        width={this.props.width} height={this.props.height} 
        y={this.props.offset} x={this.props.availableHeight - this.props.width} />
    );
  }
});
var Chart = React.createClass({
  render: function() {
    return (
      <svg width={this.props.width} height={this.props.height}>{this.props.children}</svg>
    );
  }
});

var Comments = React.createClass({
	render: function(){
		var activeQuestion = this.props.activeQuestion;
		if (this.props.questions[activeQuestion].title == "About Us") {
			return (
				<AboutUs />
			);
		} else if (this.props.questions[activeQuestion].comments[0].title == "") {
			return (
				<div><br/><br/>
				</div>
			);
		} else {
		return(
			<div className="box">
				<div>
					<h4 className="mui--pull-left"><b>{this.props.questions[activeQuestion].comments[0].vote}</b>&nbsp;- {this.props.questions[activeQuestion].comments[0].name}</h4>
					<h4 className="mui--pull-right">{this.props.questions[activeQuestion].comments[0].date}</h4>
					<div className="mui--clearfix"></div>
				</div>
				<br/>
				<div className="mui--text-black-87 mui--text-body1">
					{this.props.questions[activeQuestion].comments[0].comment}
				</div>
			</div>
		);
	}
	}
});


var SigninButton =  React.createClass({
	getInitialState: function() {
		return { showSignup: false,
						 showLogin: false 
						};
	},
	openSignup: function() {
		this.setState({showSignup: !this.state.showSignup});
		this.setState({showLogin: false});
	},
	openLogin: function() {
		this.setState({showLogin: !this.state.showLogin});
		this.setState({showSignup: false});
	},
	render: function() {
		return (
			<div>
			<li className='category signin' onClick={this.openSignup} ><b>Sign Up</b></li>
			{ this.state.showSignup ? <Signup /> : null }
			<li className='category signin' onClick={this.openLogin} ><b>Login</b></li>
			{ this.state.showLogin ? <Login /> : null }
			</div>
		);
	}
});

var Login = React.createClass({
	render: function() {
		return(
			<div className="">
				<form name="login">
					<ul className='signin'>
						<li>
							<div className="mui-textfield mui-textfield--float-label">
								<input type="text" />
								<label>Email</label>
							</div>
						</li>
						<li>
							<div className="mui-textfield mui-textfield--float-label">
								<input type="password" />
								<label>Password</label>
							</div>
						</li>
					</ul>
				<div className="signin-social">
					<br/>
					<div className='mui-col-xs-6'>
					<span>coming:</span>
					<img className="standard-img" src="client/img/signin-facebook.png" />
					<img className="standard-img" src="client/img/signin-google.png" />
					</div>
					<div className='mui-col-xs-6'>
						<button className="mui-btn mui-btn--small mui-btn--primary mui--pull-right">Submit</button>
					</div>
					<br/>
					<br/>
					<br/>
				</div>
				<br/>
				</form>
			</div>
		);
	} 
});

var Signup = React.createClass({
	render: function() {
		return(
			<div className="">
				<form name="login">
					<ul className='signin'>
						<li>
							<div className="mui-textfield mui-textfield--float-label">
								<input type="text" />
								<label>Email</label>
							</div>
						</li>
						<li>
							<div className="mui-textfield mui-textfield--float-label">
								<input type="password" />
								<label>Password</label>
							</div>
						</li>
						<li>
							<div className="mui-textfield mui-textfield--float-label">
								<input type="password" />
								<label>Confirm Password</label>
							</div>
						</li>
					</ul>
				<div className="signin-social">
					<br/>
					<div className='mui-col-xs-6'>
					<span>coming:</span>
					<img className="standard-img" src="client/img/signin-facebook.png" />
					<img className="standard-img" src="client/img/signin-google.png" />
					</div>
					<div className='mui-col-xs-6'>
						<button className="mui-btn mui-btn--small mui-btn--primary mui--pull-right">Submit</button>
					</div>
					<br/>
					<br/>
					<br/>
				</div>
				<br/>
				</form>
			</div>
		);
	} 
});



var AboutUs = React.createClass ({
	render: function(){
		return (
			<div className='aboutUs'>
				<br/>
				<h4>Where am I?</h4>
				<div className='box'>
					<p>Welcome to GraphWhy.org. Our objective is to educate the American public on important social issues.
					</p>
				</div><br/>
				<h4> The Problem </h4>
				<div className='box'>
					<p>We believe, that most political conversations are filled with sh*t.</p>
					<p>We believe, that American media fills the mind of the public with cr*p.</p>
					<p>We believe, that the US working class if getting f*cked.</p>
				</div><br/>
				<h4> The Solution </h4>
				<div className='box'>
					<p>Share your opinions with everyone </p>
					<p>Understand the opinions of others </p>
					<p>Scrutinize the authorities in that space</p>
				</div><br/>
				<h4> How </h4>
				<div className='box'>
					<p>Share your opinions with everyone </p>
					<p>Understand the opinions of others </p>
					<p>Scrutinize the authorities in that space</p>
				</div><br/>
				<h4> Support </h4>
				<div className='box'>
					<p>GraphWhy.org currently does not allow anyone to ask questions, and does not allow anyone to leave comments. If you would like to contribute more than a vote please email Alexander.McNulty92@gmail.com</p>
				</div>
			</div>
		);
	}
});

var QUESTIONS = [
	{
		id: 0,
		route:["FederalDebt", "/"],
		category: "Question",
		breadcrumb: "Federal Debt",
		title		: "How important is the US federal debt?",
		options :	[
								" A - USA's #1 Priority",
								" B - USA's #2 Priority",
								" C - USA's top 5 priorities",
								" D - USA's top 10 priorities",
								" E - None of the above"
							],
		votes 	: [
								"5",   //E
								"6",   //D
								"9",   //C
								"10",  //B
								"1"    //An
							],
		comments: [	
								{
									vote:"",
									name:"",
									title:"",
									date:"",
									comment:""
								}
							],
		active: true
	},
	{
		id: 1,
		route:["FederalDebt", "/"],
		category: "Question",
		breadcrumb: "Federal Debt",
		title		: "In ten years, will the average american have more buying power?",
		options :	[
								" A - Yes",
								" B - No"
							],
		votes 	: [
								"5",   //E
								"6"   //D
							],
		comments: [	
								{
									vote:"",
									name:"",
									title:"",
									date:"",
									comment:""
								}
							],
		active: true
	},
	{
		id: 2,
		route:["FederalDebt", "/"],
		category: "Question",
		breadcrumb: "Federal Debt",
		title		: "Should we reduce military spending?",
		options :	[
								" A - Yes, absolutly!",
								" B - Yes",
								" C - Neutral",
								" D - No",
								" E - No, absolutly not!"
							],
		votes 	: [
								"5",   //E
								"6"   //D
							],
		comments: [	
								{
									vote:"",
									name:"",
									title:"",
									date:"",
									comment:""
								}
							],
		active: true
	},
	{
		id: 3,
		route:"DrugLaw",
		category: "Question",
		breadcrumb: "Drug Law",
		title		: "Should we legalize all drugs?",
		options :	[
								" A - Yes, absolutly!",
								" B - Yes",
								" C - Neutral",
								" D - No",
								" E - No, absolutly not!"
							],
		votes 	: [
								"5",   //E
								"2",   //D
								"8",   //C
								"11",  //B
								"9"    //A
							],
		comments: [	
								{
									vote:"",
									name:"",
									title:"",
									date:"",
									comment:""
								}
							],
		active: false
	},
	{
	id: 4 ,
	route:"AboutUs",
	category: "Info",
	breadcrumb: "About Us",
	title: "About Us",
	options : [],
	votes: [],
	comments: 			"<div className='mui-col-xs-12 mui-col-sm-10 mui-col-sm-offset-1 aboutUs'><br/><br/><h1> About Us </h1><h4>Where am I?</h4><div className='box'><p>Welcome to GraphWhy.org. Our objective is to educate the American public on important social issues.</p></div><br/><h4> The Problem </h4><div className='box'><p>We believe, that most political conversations are filled with sh*t.</p><p>We believe, that American media fills the mind of the public with cr*p.</p><p>We believe, that the US working class if getting f*cked.</p></div><br/><h4> The Solution </h4><div className='box'><p>Share your opinions with everyone </p><p>Understand the opinions of others </p><p>Scrutinize the authorities in that space</p></div><br/><h4> How </h4><div className='box'><p>Share your opinions with everyone </p><p>Understand the opinions of others </p><p>Scrutinize the authorities in that space</p></div><br/><h4> Support </h4><div className='box'><p>GraphWhy.org currently does not allow anyone to ask questions, and does not allow anyone to leave comments. If you would like to contribute more than a vote please email Alexander.McNulty92@gmail.com</p></div></div>"}
];


ReactDOM.render(
	<App questions={QUESTIONS} />,
	document.getElementById('app')
);
