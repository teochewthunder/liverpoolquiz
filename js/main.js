var app = angular.module("quizApp", []);

app.controller("quizCtrl", 
function($scope, $interval) 
{	
	$scope.questions = 
	[
		{
			"text": "How many goals did Fernando Torres score in his first season?",
			"answer": 2,
			"explanation": "He scored 33 goals in all competitions.",
			"options": 
			[
				{
					"text": "10 to 20",
					"selected": ""
				},
				{
					"text": "25 to 30",
					"selected": ""
				},
				{
					"text": "30 to 35",
					"selected": ""
				},
				{
					"text": "40 to 50",
					"selected": ""
				}				
			]			
		},
		{
			"text": "Which of the following is a famous Bill Shankly quote?",
			"answer": 1,
			"explanation": "While he may have said the other things at some point, this quote remains one of the more famous ones.",
			"options": 
			[
				{
					"text": "A stitch in time saves nine.",
					"selected": ""
				},
				{
					"text": "If you are first, you are first. If you are second, you are nothing.",
					"selected": ""
				},
				{
					"text": "We'll be back.",
					"selected": ""
				},
				{
					"text": "Liverpool fans are the most amazing in the world.",
					"selected": ""
				}				
			]			
		},
		{
			"text": "Who was Liverpool Captain before Steven Gerrard?",
			"answer": 0,
			"explanation": "Steven Gerrard took over Captaincy from Sammi Hyppia in 2003.",
			"options": 
			[
				{
					"text": "Sammi Hyppia",
					"selected": ""
				},
				{
					"text": "Daniel Agger",
					"selected": ""
				},
				{
					"text": "Vladimir Smicer",
					"selected": ""
				},
				{
					"text": "Ian Rush",
					"selected": ""
				}				
			]			
		},
		{
			"text": "Which club did Michael Owen leave Liverpool for?",
			"answer": 0,
			"explanation": "Owen has played for all the other clubs, but he left Liverpool for Real Madrid in 2004.",
			"options": 
			[
				{
					"text": "Real Madrid",
					"selected": ""
				},
				{
					"text": "Newcastle",
					"selected": ""
				},
				{
					"text": "Manchester United",
					"selected": ""
				},
				{
					"text": "Stoke City",
					"selected": ""
				}				
			]			
		},
		{
			"text": "What was Robbie Fowler's nickname?",
			"answer": 3,
			"explanation": "Due to his natural killer instinct in front of goal, Fowler remains a Liverpool legend, and Anfield's God.",
			"options": 
			[
				{
					"text": "Robbs",
					"selected": ""
				},
				{
					"text": "Thunderstorm",
					"selected": ""
				},
				{
					"text": "Rocket",
					"selected": ""
				},
				{
					"text": "God",
					"selected": ""
				}				
			]			
		},
		{
			"text": "What position did John Arne Riise primarily play in?",
			"answer": 1,
			"explanation": "Riise was generally deployed as Left-back in this time in Liverpool.",
			"options": 
			[
				{
					"text": "Goal",
					"selected": ""
				},
				{
					"text": "Defence",
					"selected": ""
				},
				{
					"text": "Midfield",
					"selected": ""
				},
				{
					"text": "Attack",
					"selected": ""
				}				
			]			
		},
		{
			"text": "Luis Suarez reached the 30-goal mark for Liverpool in 2014. Before him, what other player achieved this?",
			"answer": 3,
			"explanation": "Ian Rush was the only other player in the list to achieve this.",
			"options": 
			[
				{
					"text": "Harry Kewell",
					"selected": ""
				},
				{
					"text": "Robbie Keane",
					"selected": ""
				},
				{
					"text": "Emile Heskey",
					"selected": ""
				},
				{
					"text": "Ian Rush",
					"selected": ""
				}				
			]			
		},
		{
			"text": "How many times was Kenny Daglish Liverpool Manager?",
			"answer": 0,
			"explanation": "King Kenny was Manager between 1985 and 1991, then again between 2011 and 2012.",
			"options": 
			[
				{
					"text": "2",
					"selected": ""
				},
				{
					"text": "3",
					"selected": ""
				},
				{
					"text": "1",
					"selected": ""
				},
				{
					"text": "5",
					"selected": ""
				}				
			]			
		},
		{
			"text": "While Dirk Kuyt was primarily a striker, what other position was he often played in?",
			"answer": 3,
			"explanation": "There were several occasions where Kuyt was deployed as Right Winger.",
			"options": 
			[
				{
					"text": "Goal",
					"selected": ""
				},
				{
					"text": "Central Defence",
					"selected": ""
				},
				{
					"text": "Left Midfield",
					"selected": ""
				},
				{
					"text": "Right Midfield",
					"selected": ""
				}				
			]			
		},
		{
			"text": "What did Philippe Coutinho and Michael Owen have in common?",
			"answer": 2,
			"explanation": "While it's certainly possible that they both loved ice-cream, both Coutinho and Owen were well-known for using the jersey number 10.",
			"options": 
			[
				{
					"text": "Love for ice-cream",
					"selected": ""
				},
				{
					"text": "Country of Birth",
					"selected": ""
				},
				{
					"text": "Jersey Numbers",
					"selected": ""
				},
				{
					"text": "Goal tallies",
					"selected": ""
				}				
			]			
		}
	];

	$scope.result = 0;
	$scope.possible = $scope.questions.length;
	$scope.currentQuestion = -1;
	$scope.secondsRemaining = 60;
	$scope.proceed = "Next";
	$scope.timer = null;

	$scope.secondsRemainingMessage = "";
	$scope.resultsMessage = "";
	$scope.resultsGrade = "";

	$scope.initQuiz = 
	function()
	{	
		$scope.result = 0;
		$scope.currentQuestion = -1;
		$scope.secondsRemaining = 60;
		$scope.proceed = "Next";
		$scope.timer = $interval.cancel($scope.timer);
		$scope.timer = null;

		for (var i = 0; i < $scope.questions.length; i++)
		{
			for (var j = 0; j < $scope.questions[i].options.length; j++)
			{
				$scope.questions[i].options[j].selected = "";
			}			
		}
	};

	$scope.getIndicator = 
	function (question, option)
	{
		if ($scope.questions[question].answer == option)
		{
			return "correct";
		}
		else
		{
			return "wrong";
		}
	};

	$scope.selectOption = 
	function (question, option)
	{
		if ($scope.isAnswered(question) != "answered")	
		{
			$scope.questions[question].options[option].selected = "selected";

			if (option == $scope.questions[question].answer)
			{
				$scope.result++;
			}

			if ($scope.currentQuestion < $scope.questions.length - 1)
			{
				$scope.proceed = "Next";
			}
			else
			{
				$scope.proceed = "Results";
			}
		}	
	};

	$scope.isAnswered = 
	function (question)
	{
		if (question > -1 && question < $scope.questions.length)
		{
			for (var i = 0; i < $scope.questions[question].options.length; i++)
			{
				if ($scope.questions[question].options[i].selected == "selected") return "answered";
			}			
		}

		return "";
	};

	$scope.isCurrentQuestion = 
	function (question)
	{
		if ($scope.currentQuestion == question) return "current";

		return "";
	};

	$scope.nextQuestion = 
	function ()
	{
		if ($scope.timer == null)
		{
			$scope.timer = $interval
			(
				function() 
				{
					$scope.secondsRemaining--;

					if ($scope.secondsRemaining < 0)
					{
						$scope.currentQuestion = $scope.questions.length;
					    $scope.timer = $interval.cancel($scope.timer);
					}
				},
				1000
			);
		}

		if ($scope.isAnswered($scope.currentQuestion) == "answered" || $scope.currentQuestion == -1)
		{
			$scope.currentQuestion ++;	

			if ($scope.currentQuestion == $scope.questions.length)
			{
				$scope.timer = $interval.cancel($scope.timer);
			}
		}
	};

	$scope.getStage = 
	function ()
	{
		if ($scope.currentQuestion == -1) return "main";

		if ($scope.currentQuestion == $scope.questions.length) 
		{
			if ($scope.secondsRemaining > 0)
			{
				$scope.secondsRemainingMessage = "That was fast!";
			}
			else
			{
				$scope.secondsRemainingMessage = "Time's up!";
			}

			if ($scope.result >= ($scope.possible / 2))
			{
				$scope.resultsMessage = "Well done!";
				$scope.resultsGrade = "good";
			}
			else
			{
				$scope.resultsMessage = "Do better next time!";
				$scope.resultsGrade = "poor";
			}

			return "results";
		}

		return "questions";
	};
}
);