(function($){

	// Password strength meter
	// Source /wp-admin/js/password-strength-meter.dev.js
	function passwordStrength(password1, username, password2) {
		var shortPass = 1, badPass = 2, goodPass = 3, strongPass = 4, mismatch = 5, symbolSize = 0, natLog, score;

		// password 1 != password 2
		if ((password1 != password2) && password2.length > 0)
			return mismatch

		//password < 4
		if (password1.length < 4)
			return shortPass

		//password1 == username
		if (password1.toLowerCase() == username.toLowerCase())
			return badPass;

		if (password1.match(/[0-9]/))
			symbolSize += 10;
		if (password1.match(/[a-z]/))
			symbolSize += 26;
		if (password1.match(/[A-Z]/))
			symbolSize += 26;
		if (password1.match(/[^a-zA-Z0-9]/))
			symbolSize += 31;

		natLog = Math.log(Math.pow(symbolSize, password1.length));
		score = natLog / Math.LN2;

		if (score < 40 )
			return badPass

		if (score < 56 )
			return goodPass

		return strongPass;
	}

	function check_pass_strength() {
		var pass1 = $('#password').val(), user = $('#username').val(), pass2 = $('#passwordretype').val(), strength;

		$('#pass-strength-result').removeClass('short bad good strong');
		if (!pass1) {
			$('#pass-strength-result').html('Strength indicator');
			return;
		}

		strength = passwordStrength(pass1, user, pass2);

		switch (strength) {
			case 2:
				$('#pass-strength-result').addClass('bad').html('Weak');
				break;
			case 3:
				$('#pass-strength-result').addClass('good').html('Medium');
				break;
			case 4:
				$('#pass-strength-result').addClass('strong').html('Strong');
				break;
			case 5:
				$('#pass-strength-result').addClass('short').html('Mismatch');
				break;
			default:
				$('#pass-strength-result').addClass('short').html('Very weak');
		}
	}

	$(document).ready(function() {
		$('#password').val('').keyup(check_pass_strength);
		$('#passwordretype').val('').keyup(check_pass_strength);
		$('#pass-strength-result').show();
	});


})(jQuery);