<?php
/*
Plugin Name: Live Help (w/ Auto Install)
Plugin URI: http://livehelp.stardevelop.com/
Description: Live Help allows you to easily add the Live Help HTML code to your WordPress blog.  Live Help will also be auotmatically installed into your WordPress database when using the Auto Install plugin.  The JavaScript code will be added and you can also use the Live Help widget to display the Online / Offline button. Requires the Live Help Server Software starting at US$159.95.
Author: Stardevelop Pty Ltd
Version: 1.60
Author URI: http://livehelp.stardevelop.com/
*/

// Register Hooks
register_activation_hook(__FILE__, 'livehelp_plugin_install');
register_uninstall_hook(__FILE__, 'livehelp_plugin_uninstall');

// Activate Plugin Hook
function livehelp_plugin_install()
{
	global $wpdb;
	$table_prefix = 'livehelp_';

	// Default Site URL
	if ($_SERVER['SERVER_PORT'] == '443') {	$protocol = 'https://'; } else { $protocol = 'http://'; }
	$url = $protocol . $_SERVER['HTTP_HOST'];
	$schemafile = $url . '/livehelp/install/mysql.schema.txt';
	$settingsfile = $url . '/livehelp/install/mysql.data.settings.txt';

	$schemaexists = file_get_contents($schemafile);
	$settingsexists = file_get_contents($settingsfile);
	if (!empty($schemaexists) && !empty($settingsexists)) {
	
		$sqlfile = file($schemafile);
		$dump = '';
		foreach ($sqlfile as $key => $line) {
			if (trim($line) != '' && substr(trim($line), 0, 1) != '#' && substr(trim($line), 0, 10) != 'DROP TABLE') {
				$line = str_replace('prefix_', $table_prefix, $line);
				$dump .= trim($line);
			}
		}

		$dump = trim($dump,';');
		$tables = explode(';', $dump);
		
		// @ prefix used to suppress errors, but you should do your own
		// error checking by checking return values from each mysql_query()
		$error = false;
 
		// Start Transaction
		@mysql_query('BEGIN', $wpdb->dbh);
		
		
		// Database Schema
		foreach ($tables as $key => $sql) {
			if ($wpdb->query($wpdb->prepare($sql)) === FALSE) {
				$error = true;
			}
		}
		
		// Truncate settings
		$query = 'TRUNCATE ' . $table_prefix . 'settings';
		if ($wpdb->query($wpdb->prepare($query)) === FALSE) {
			$error = true;
		}

		// Remove .www. if at the start of string
		$domain = $_SERVER['SERVER_NAME'];
		if (substr($domain, 0, 4) == 'www.') {
			$domain = substr($domain, 4);
		}
	
		// Install Domain
		if ($_SERVER['SERVER_PORT'] == '443') {	$protocol = 'https://'; } else { $protocol = 'http://'; }
		$script = $_SERVER['SCRIPT_NAME'];
		$pos = strpos($script, '/livehelp/');
		$directory = substr($script, 0, $pos);
		$installdomain = $protocol . $_SERVER['SERVER_NAME'] . $directory;
		
		$email = get_option('admin_email');
	
		// Insert the settings data into the database, and alter the offline email address.
		$dump = '';
		$sqlfile = file($settingsfile);
		foreach ($sqlfile as $key => $line) {
			if (trim($line) != '' && substr(trim($line), 0, 1) != '#') {
				$line = str_replace('prefix_', $table_prefix, $line);
				$line = str_replace('enquiry@stardevelop.com', $email, $line);
				$line = str_replace("'Domain', 'stardevelop.com'", "'Domain', '$domain'", $line);
				$line = str_replace('http://livehelp.stardevelop.com', $installdomain, $line);
				
				// Settings
				$line = str_replace('/livehelp/locale/en/images/Online.png', $installdomain . '/livehelp/locale/en/images/Online.png', $line);
				$line = str_replace('/livehelp/locale/en/images/Offline.png', $installdomain . '/livehelp/locale/en/images/Offline.png', $line);
				$line = str_replace('/livehelp/locale/en/images/BeRightBack.png', $installdomain . '/livehelp/locale/en/images/BeRightBack.png', $line);
				$line = str_replace('/livehelp/locale/en/images/Away.png', $installdomain . '/livehelp/locale/en/images/Away.png', $line);
				
				// AuthKey Setting
				$key = '';
				$chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()-_=+[{]}\|:\,<.>/?';
				for ($index = 0; $index < 255; $index++) {
					$number = rand(1, strlen($chars));
					$key .= substr($chars, $number - 1, 1);
				}
				$line = str_replace('D\YLu+,R0\Ze%7"B/BZ\'vZ/%P9,y\g0HB5}hZdPag_@^mYZp~_&$MT4OKt}vHRY-}>Wh:x*Eqh]^9h\R~a9qBX&_`oT?5bM4?[ZU\'YMmml(\'xVrH|_uo&XM7~Gqv+B!A2d-5CjG;M"TKmGHM)Kh$q_p>C1!;EVeVn}BIr$}ry&$&tf*CVQ\'uUk%!6jW1OJN2.vClarQC6VT}%PwI?+Yr;U\`(|\iF5qqIT1*n"sgf>9wycF4s`9sU3sP+W}.Y1r', $wpdb->escape($key), $line);
				
				$dump .= trim($line);
			}
		}
		unset($sqlfile);

		$dump = trim($dump, ';');
		$tables = explode(';', $dump);

		// Insert Settings
		foreach ($tables as $key => $sql) {
			if ($wpdb->query($sql) === FALSE) {
				$error = true;
				exit();
			}
		}
		unset($tables);
		
		$schemafile = $url . '/livehelp/install/mysql.data.countries.txt';
		$sqlfile = file($schemafile);
		$dump = '';
		foreach ($sqlfile as $key => $line) {
			if (trim($line) != '' && substr(trim($line), 0, 1) != '#' && substr(trim($line), 0, 10) != 'DROP TABLE') {
				$line = str_replace('prefix_', $table_prefix, $line);
				$dump .= trim($line);
			}
		}

		$dump = trim($dump,';');
		$tables = explode(';', $dump);
		
		// Countries Schema
		foreach ($tables as $key => $sql) {
			if ($wpdb->query($wpdb->prepare($sql)) === FALSE) {
				$error = true;
			}
		}
		
		if ($error) {
			// Error occured, don't save any changes
			@mysql_query('ROLLBACK', $wpdb->dbh);
		} else {
		   // All ok, save the changes
		   @mysql_query('COMMIT', $wpdb->dbh);
		   
		   // Save Database Configuration
		   livehelp_save_configuration();
		   
		}
	}
	
}

// Uninstall Plugin Hook
function livehelp_plugin_uninstall()
{
	global $wpdb;
	$table_prefix = 'livehelp_';

	// Default Site URL
	if ($_SERVER['SERVER_PORT'] == '443') {	$protocol = 'https://'; } else { $protocol = 'http://'; }
	$url = $protocol . $_SERVER['HTTP_HOST'];
	$schemafile = $url . '/livehelp/install/mysql.schema.uninstall.txt';

	$exists = file_get_contents($schemafile);
	if (!empty($exists)) {
	
		$sqlfile = file($schemafile);
		$dump = '';
		foreach ($sqlfile as $key => $line) {
			if (trim($line) != '' && substr(trim($line), 0, 1) != '#') {
				$line = str_replace('prefix_', $table_prefix, $line);
				$dump .= trim($line);
			}
		}

		$dump = trim($dump,';');
		$tables = explode(';', $dump);
		
		// @ prefix used to suppress errors, but you should do your own
		// error checking by checking return values from each mysql_query()
		$error = false;
 
		// Start Transaction
		@mysql_query('BEGIN', $wpdb->dbh);
		
		foreach ($tables as $key => $sql) {
			if ($wpdb->query($wpdb->prepare($sql)) === FALSE) {
				$error = true;
			}
		}
		
		if ($error) {
			// Error occured, don't save any changes
			@mysql_query('ROLLBACK', $wpdb->dbh);
		} else {
		   // All ok, save the changes
		   @mysql_query('COMMIT', $wpdb->dbh);
		}
	}
	
}

// Save Live Help Database Configuration
function livehelp_save_configuration()
{

	$pluginpath = realpath(__FILE__);
	$siteurl = get_option('siteurl');
	
	if (preg_match(
		'/^
		# Skip over scheme and authority, if any
		([a-z][a-z0-9+\-.]*:(\/\/[^\/?#]+)?)?
		# Path
		(?P<path>[a-z0-9\-._~%!$&\'()*+,;=:@\/]*)/ix', 
		$siteurl, $regs)) {
		$path = $regs['path'] . '/';
	} else {
		$path = '';
	}
	
	$pos = strpos($pluginpath, $path);
	if ($pos !== false) {
		$configuration = substr($pluginpath, 0, $pos) . '/livehelp/include/database.php';

		$writable = true;
		if ($error == '') {
			if (@fopen($configuration, 'r') == true) {
				if (is_writable($configuration)) {
					
					$table_prefix = 'livehelp_';
					
					$content = "<?php\n";
					$content .= "\n";
					$content .= 'define(\'DB_HOST\', \'' . DB_HOST . '\');' . "\n";
					$content .= 'define(\'DB_NAME\', \'' . DB_NAME . '\');' . "\n";
					$content .= 'define(\'DB_USER\', \'' . DB_USER . '\');' . "\n";
					$content .= 'define(\'DB_PASS\', \'' . DB_PASSWORD . '\');' . "\n";
					$content .= "\n";
					$content .= '$table_prefix =  \'' . $table_prefix . '\';' . "\n";
					$content .= "\n";
					$content .= 'return true;' . "\n";
					$content .= "\n";
					$content .= "?>";
		
					if (!$handle = fopen($configuration, 'w')) {
						$writable = false;
					}
					else {
						if (!fwrite($handle, $content)) {
							$writable = false;
						}
						else {
							$writable = true;
							fclose($handle);
						}
					}
				}
				else {
					$writable = false;
				}
			}
			else {
				$writable = false;
			}
		}
	
	}
}

// Create Operator Account
function livehelp_create_account($username, $password)
{
	global $wpdb;
	$table_prefix = 'livehelp_';
	
	// Operator Email
	$email = get_option('admin_email');
	
	// Password SHA1 / SHA512 Hash
	$algo = 'sha512';
	if (function_exists('hash') && in_array($algo, hash_algos())) {
		$password = hash($algo, $password);
	} else if (function_exists('mhash') && mhash_get_hash_name(MHASH_SHA512) != false) {
		$password = bin2hex(mhash(MHASH_SHA512, $password));
	} else {
		$password = sha1($password);
	}
	
	$query = "INSERT INTO " . $table_prefix . "users (`id`, `username`, `password`, `firstname`, `lastname`, `email`, `department`, `image`, `privilege`, `status`) VALUES ('1', '$username', '$password', 'Administrator', 'Account', '$email', 'Sales / Technical Support', '', '-1', '-1')";
	if ($wpdb->query($wpdb->prepare($query)) === FALSE) {
		add_settings_error('livehelp_options', 'create_account_error', 'Create Operator Account Unsuccessful - SQL Error', 'error');
	} else {
		add_settings_error('livehelp_options', 'create_account_success', 'Create Operator Account Successful', 'updated');
	}
}

// Reset Operator Account
function livehelp_reset_account($id, $username, $password)
{
	global $wpdb;
	$table_prefix = 'livehelp_';
	
	// Operator Email
	$email = get_option('admin_email');
	
	if (empty($password)) {
	
		// Reset Account Username
		$query = "UPDATE " . $table_prefix . "users SET `username` = '$username' WHERE `id` = '$id'";
		if ($wpdb->query($wpdb->prepare($query)) === FALSE) {
			add_settings_error('livehelp_options', 'reset_account_error', 'Operator Account Reset Unsuccessful - SQL Error', 'error');
		} else {
			add_settings_error('livehelp_options', 'reset_account_success', 'Operator Account Reset Successful', 'updated');
		}
		
	} else {
	
		// Password SHA1 / SHA512 Hash
		$algo = 'sha512';
		if (function_exists('hash') && in_array($algo, hash_algos())) {
			$password = hash($algo, $password);
		} else if (function_exists('mhash') && mhash_get_hash_name(MHASH_SHA512) != false) {
			$password = bin2hex(mhash(MHASH_SHA512, $password));
		} else {
			$password = sha1($password);
		}
		
		// Reset Account Username and Password
		$query = "UPDATE " . $table_prefix . "users SET `username` = '$username', `password` = '$password' WHERE `id` = '$id'";
		if ($wpdb->query($wpdb->prepare($query)) === FALSE) {
			add_settings_error('livehelp_options', 'reset_account_error', 'Operator Account Reset Unsuccessful - SQL Error', 'error');
		} else {
			add_settings_error('livehelp_options', 'reset_account_success', 'Operator Account Reset Successful', 'updated');
		}
	}
}

// WordPress JavaScript Action
add_action('wp_print_scripts', 'livehelp_js');
add_action('wp_head', 'livehelp_head');

// Live Help JavaScript
function livehelp_js()
{
	if (is_admin() || is_feed()) { return; }

	$embedded = true;
	$slider = false;
	$options = get_option('livehelp_options');
	
	if ($_SERVER['SERVER_PORT'] == '443') {	$protocol = 'https://'; } else { $protocol = 'http://'; }
	if (isset($options['url'])) { $url = $options['url']; }
	if (isset($options['embedded'])) { $slider = $options['embedded']; }
	if (isset($options['slider'])) { $slider = $options['slider']; }
	
	// Default Site URL
	if (empty($url)) {
		$url = $protocol . $_SERVER['HTTP_HOST'];
	} else {
		$protocols = array('http://', 'https://');
		$url = str_replace($protocols, $protocol, $url);
	}
	
	// Insert Latest jQuery
	wp_deregister_script('jquery');
	wp_register_script('jquery', $url . '/livehelp/scripts/jquery-latest.js');
	wp_enqueue_script('jquery');
	
}

function livehelp_head()
{
	
	// Default Site URL
	$url = $_SERVER['HTTP_HOST'];
	$embedded = true;
	$slider = false;
	
	$options = get_option('livehelp_options');
	if (isset($options['url'])) { $url = $options['url']; }
	if (isset($options['embedded'])) { $embedded = $options['embedded']; }
	if (isset($options['slider'])) { $slider = $options['slider']; }

	if (empty($url)) {
		$url = $_SERVER['HTTP_HOST'];
	} else {
		$protocols = array('http://', 'https://');
		$url = str_replace($protocols, '', $url);
	}
	
	echo '<script type="text/javascript">' . "\n";
	echo 'var LiveHelpSettings = {};' . "\n";
	echo 'LiveHelpSettings.server = \'' . $url . '\';' . "\n";
	
	// Live Chat Embedded
	if ($embedded == true) {
		echo 'LiveHelpSettings.embedded = true;' . "\n";
	}
	
	// Live Chat Slider
	if ($slider == true) {
		echo 'LiveHelpSettings.inviteTab = true;' . "\n";
	}

	echo '(function($) {' . "\n";
	echo '	$(function() {' . "\n";
	echo '		$(window).ready(function() {' . "\n";
	echo '			LiveHelpSettings.server = LiveHelpSettings.server.replace(/[a-z][a-z0-9+\-.]*:\/\/|\/livehelp\/*(\/|[a-z0-9\-._~%!$&\'()*+,;=:@\/]*(?![a-z0-9\-._~%!$&\'()*+,;=:@]))|\/*$/g, \'\');' . "\n";
	echo '			var LiveHelp = document.createElement(\'script\'); LiveHelp.type = \'text/javascript\'; LiveHelp.async = true;' . "\n";
	echo '			LiveHelp.src = (\'https:\' == document.location.protocol ? \'https://\' : \'http://\') + LiveHelpSettings.server + \'/livehelp/scripts/jquery.livehelp.min.js\';' . "\n";
	echo '			var s = document.getElementsByTagName(\'script\')[0];' . "\n";
	echo '			s.parentNode.insertBefore(LiveHelp, s);' . "\n";
	echo '		});' . "\n";
	echo '	});' . "\n";
	echo '})(jQuery);' . "\n";
	echo '</script>' . "\n";

}

// Live Help HTML Code
function livehelp_code()
{
	$options = get_option('livehelp_options');
	$url = $options['url'];

	$code= <<<EOD
<!-- stardevelop.com Live Help International Copyright - All Rights Reserved //-->
<!-- BEGIN Live Help HTML Code - NOT PERMITTED TO MODIFY IMAGE MAP/CODE/LINKS //-->
<a href="#" class="LiveHelpButton" style="border:none"><img src="{$url}/livehelp/include/status.php" id="LiveHelpStatus" name="LiveHelpStatus" border="0" alt="Live Help" title="Live Help" class="LiveHelpStatus"/></a>
<!-- END Live Help HTML Code - NOT PERMITTED TO MODIFY IMAGE MAP/CODE/LINKS //-->
EOD;
	return $code;
}


/**
 * Live Help Widget Class
 */
class LiveHelpWidget extends WP_Widget {
    /** constructor */
    function LiveHelpWidget() {
		$opts = array('description' => 'Your Live Help Online / Offline Chat Button');
        parent::WP_Widget(false, $name = 'Live Help', $opts);	
    }
	
	function WP_Widget_Polls() {
		
		$this->WP_Widget('polls', __('Polls'), $widget_ops);
	}

    /** @see WP_Widget::widget */
    function widget($args, $instance) {		
        extract($args);
		if (empty($instance['title'])) { $instance['title'] = 'Live Help'; }
		
		$title = apply_filters('widget_title', $instance['title']);
		echo $before_widget;
		
		if ($title) {
			echo $before_title . $title . $after_title;
		}
		echo livehelp_code();
		echo $after_widget;
    }

    /** @see WP_Widget::update */
    function update($new_instance, $old_instance) {				
        return $new_instance;
    }

    /** @see WP_Widget::form */
    function form($instance) {
		$title = '';
		if (!empty($instance['title'])) {
			$title = esc_attr($instance['title']);
		}
        ?>
            <p><label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:'); ?> <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo $title; ?>" /></label></p>
        <?php 
    }

}

// Register Widget widget
add_action('widgets_init', create_function('', 'return register_widget("LiveHelpWidget");'));

// Resister Live Help Shortcode
add_shortcode('livehelp', 'livehelp_code');

// Live Help Installation Missing
function livehelp_admin_notices() {

	// Options
	$options = get_option('livehelp_options');
	$url = $options['url'];

	if (empty($url)) {
		// Site URL
		if ($_SERVER['SERVER_PORT'] == '443') {	$protocol = 'https://'; } else { $protocol = 'http://'; }
		$url = $protocol . $_SERVER['HTTP_HOST'];
	}
	
	$script = $url . '/livehelp/scripts/jquery.livehelp.js';

	// Check URL with cURL etc.
	if (function_exists('curl_init')) {
	
		$ch = curl_init($script);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
		$result = curl_exec($ch);
		$info = @curl_getinfo($ch);
        curl_close ($ch);
        if ($info['http_code'] != 404) {
			livehelp_database_notice();
			return;
		}
		echo '<div class="updated"><p><a href="options-general.php?page=livehelp">Live Help</a> needs attention: Could not locate the Live Help Installation at ' . $url . '/livehelp/. Please enter the URL where Live Help is installed within the Settings.</p></div>';
		return;
		
	} else {
	
		if (@fopen($script, 'r') == true) {
			livehelp_database_notice();
			return;
		}
		echo '<div class="error"><p><strong>Live Help is not active.</strong> Could not locate the Live Help Installation at ' . $url . '/livehelp/. <a href="options-general.php?page=livehelp">Please enter the URL</a> where Live Help is installed within the Settings.</p></div>';
		return;
	}
	
}

function livehelp_database_notice() {

	global $wpdb;
	global $operators;
	$table_prefix = 'livehelp_';

	// Check Schema Created
	$table = $table_prefix . 'users';
	$query = "SHOW TABLES FROM " . DB_NAME . " LIKE '$table'";
	$users = $wpdb->get_var($wpdb->prepare($query));
	
	// Schema Error
	if ($users != $table) {
		echo '<div class="error"><p><strong>Live Help needs attention.</strong> Live Help database schema does not exist. Please <a href="options-general.php?page=livehelp">install the database schema</a> within the Settings.</p></div>';
		return;
	} else {

		// Check Operator Created
		$query = "SELECT COUNT(*) FROM " . $table_prefix . "users";
		$operators = (int)$wpdb->get_var($wpdb->prepare($query));
		
		// Operators Error
		if ($operators == 0) {
			echo '<div class="error"><p><strong>Live Help needs attention.</strong> No Live Help operator accounts exist. Please <a href="options-general.php?page=livehelp">create an operator account</a> within the Settings.</p></div>';
			return;
		}
	
	}

}

function livehelp_admin_menu() {

	// Admin Notices
	add_action('admin_notices', 'livehelp_admin_notices');
	$page = add_options_page('Live Help', 'Live Help', 'manage_options', 'livehelp', 'livehelp_options_page');
	
	// Using registered $page handle to hook script load
    add_action('admin_print_styles-' . $page, 'livehelp_admin_styles');
}

// Administration
add_action('admin_menu', 'livehelp_admin_menu');

function livehelp_options_page(){
	echo '<div class="wrap">';
	screen_icon();
	echo '<h2>Live Help</h2>';
	echo '<form action="options.php" method="post">';
	settings_fields('livehelp_options');
	do_settings_sections('livehelp');
	do_settings_sections('livehelp_account');
	do_settings_sections('livehelp_database');
	echo '<input name="Submit" class="button-primary" type="submit" value="'. esc_attr('Save Changes') .'" /></form>';
	echo '</div>';
} 

$schema = false;
$operators = 0;

// Fill the Menu page with content
function livehelp_admin_init(){

	global $wpdb;
	global $operators;
	global $schema;
	$table_prefix = 'livehelp_';

	// Register Settings
	register_setting('livehelp_options', 'livehelp_options', 'livehelp_options_validate');
	
	// General Settings
	add_settings_section('the_livehelp', '', 'livehelp_details_text', 'livehelp');
	add_settings_field('livehelp_field', 'Live Help Installation URL', 'livehelp_url_field_display', 'livehelp', 'the_livehelp');
	add_settings_field('livehelp_embedded_field', 'Embedded Chat', 'livehelp_embedded_field_display', 'livehelp', 'the_livehelp');
	add_settings_field('livehelp_slider_field', 'Invite Tab', 'livehelp_slider_field_display', 'livehelp', 'the_livehelp');
	
	// Check Tables Created
	$table = $table_prefix . 'users';
	$query = "SHOW TABLES FROM " . DB_NAME . " LIKE '$table'";
	$users = $wpdb->get_var($wpdb->prepare($query));
	if ($users == $table) {

		// Schema Exists
		$schema = true;

		// Existing Operator Accounts
		$query = "SELECT COUNT(*) FROM " . $table_prefix . "users";
		$operators = (int)$wpdb->get_var($wpdb->prepare($query));

		// Create Operator Account Section
		if ($operators == 0) {
		
			// Add Operator Admnistrator Account
			add_settings_section('the_livehelp', '', 'livehelp_account_details_text', 'livehelp_account');	
			add_settings_field('username', 'Username', 'livehelp_account_username_field_display', 'livehelp_account', 'the_livehelp');
			add_settings_field('password', 'Password', 'livehelp_account_password_field_display', 'livehelp_account', 'the_livehelp');
			add_settings_field('passwordretype', '', 'livehelp_account_retype_password_field_display', 'livehelp_account', 'the_livehelp');
			
		} else {
		
			// Reset Administrator Password
			add_settings_section('the_livehelp', '', 'livehelp_reset_account_details_text', 'livehelp_account');
			add_settings_field('id', '', 'livehelp_reset_account_id_field_display', 'livehelp_account', 'the_livehelp');
			add_settings_field('username', 'Username', 'livehelp_reset_account_username_field_display', 'livehelp_account', 'the_livehelp');
			add_settings_field('password', 'Password', 'livehelp_reset_account_password_field_display', 'livehelp_account', 'the_livehelp');
			add_settings_field('passwordretype', '', 'livehelp_reset_account_retype_password_field_display', 'livehelp_account', 'the_livehelp');
			
		}
	
	}

	// Database Section
	add_settings_section('the_livehelp', '', 'livehelp_database_details_text', 'livehelp_database');
	
	// Register Administration JavaScript
	wp_register_script('livehelp_admin_script', plugins_url('/livehelp-admin.js', __FILE__));
	
}
add_action('admin_init', 'livehelp_admin_init');

function livehelp_admin_styles() {
	wp_enqueue_script('livehelp_admin_script');
}

function livehelp_url_field_display(){

	$options = get_option('livehelp_options');
	$url = $options['url'];

	// Site URL
	if (empty($url)) {
		if ($_SERVER['SERVER_PORT'] == '443') {	$protocol = 'https://'; } else { $protocol = 'http://'; }
		$url = $protocol . $_SERVER['HTTP_HOST'];
	}

	$fields = "<input id='livehelp_field' name='livehelp_options[url]' size='40' type='text' value='$url' /> /livehelp/ <span class='description'><br/> Example: <code>http://chat.yourdomain.com/livehelp/</code><br/> The default is <code>$url</code></span>";
	echo $fields;
}

function livehelp_embedded_field_display(){

	$options = get_option('livehelp_options');
	if (!isset($options['embedded'])) {
	
		echo "<fieldset><label><input id='livehelp_embedded_field' name='livehelp_options[embedded]' type='radio' value='1' checked='checked' />Enabled</label><br/>";
		echo "<label><input id='livehelp_embedded_field' name='livehelp_options[embedded]' type='radio' value='0' />Disabled</label></fieldset>";
		
	} else {
	
		if ((bool)$options['embedded'] == true) {
			$enabled = 'checked="checked"';
			$disabled = '';
		} else {
			$enabled = '';
			$disabled = 'checked="checked"';
		}

		echo "<fieldset><label><input id='livehelp_embedded_field' name='livehelp_options[embedded]' type='radio' value='1' $enabled />Enabled</label><br/>";
		echo "<label><input id='livehelp_embedded_field' name='livehelp_options[embedded]' type='radio' value='0' $disabled />Disabled</label></fieldset>";
	}
}

function livehelp_slider_field_display(){

	$options = get_option('livehelp_options');
	if (!isset($options['slider'])) {
	
		echo "<fieldset><label><input id='livehelp_slider_field' name='livehelp_options[slider]' type='radio' value='1' checked='checked' />Enabled</label><br/>";
		echo "<label><input id='livehelp_slider_field' name='livehelp_options[slider]' type='radio' value='0' />Disabled</label></fieldset>";
		
	} else {
	
		if ((bool)$options['slider'] == true) {
			$enabled = 'checked="checked"';
			$disabled = '';
		} else {
			$enabled = '';
			$disabled = 'checked="checked"';
		}

		echo "<fieldset><label><input id='livehelp_slider_field' name='livehelp_options[slider]' type='radio' value='1' $enabled />Enabled</label><br/>";
		echo "<label><input id='livehelp_slider_field' name='livehelp_options[slider]' type='radio' value='0' $disabled />Disabled</label></fieldset>";
	}
}

function livehelp_account_username_field_display(){
	$fields = "<input id='username' name='livehelp_options[username]' size='40' type='text' value='' />";
	echo $fields;
}

function livehelp_account_password_field_display(){
	$fields = "<input id='password' name='livehelp_options[password]' size='40' type='password' value='' />";
	echo $fields;
}

function livehelp_account_retype_password_field_display(){
	$fields = "<input id='passwordretype' name='livehelp_options[passwordretype]' size='40' type='password' value='' /><span class='description'>Type your new password again.</span>";
	echo $fields;
}

function livehelp_reset_account_username_field_display(){

	global $wpdb;
	$table_prefix = 'livehelp_';

	// Existing Operator Account
	$query = "SELECT `username` FROM " . $table_prefix . "users WHERE `privilege` = -1 LIMIT 1";
	$username = $wpdb->get_var($wpdb->prepare($query));

	$fields = "<input id='username' name='livehelp_options[username]' size='40' type='text' value='$username' />";
	echo $fields;
}

function livehelp_reset_account_id_field_display(){

	global $wpdb;
	$table_prefix = 'livehelp_';

	// Existing Operator Account ID
	$query = "SELECT `id` FROM " . $table_prefix . "users WHERE `privilege` = -1 LIMIT 1";
	$id = $wpdb->get_var($wpdb->prepare($query));

	$fields = "<input id='id' name='livehelp_options[id]' type='hidden' value='$id' />";
	echo $fields;
}

function livehelp_reset_account_password_field_display(){
	$fields = "<input id='password' name='livehelp_options[password]' size='40' type='password' value='' /><span class='description'>If you would like to change the password type a new one. Otherwise leave this blank.</span>";
	echo $fields;
}

function livehelp_reset_account_retype_password_field_display(){
	$fields = "<input id='passwordretype' name='livehelp_options[passwordretype]' size='40' type='password' value='' /><span class='description'>Type your new password again.</span>";
	echo $fields;
}

function livehelp_details_text(){

	// Site URL
	if ($_SERVER['SERVER_PORT'] == '443') {	$protocol = 'https://'; } else { $protocol = 'http://'; }
	$url = $protocol . $_SERVER['HTTP_HOST'] . '/livehelp';

	echo "<p>Enter the URL where Live Help is installed.  You only need to setup the URL if your Live Help is installed on a different server or sub-domain.</p>";
}

function livehelp_account_details_text(){
	echo '<div><h3>Create Operator Account</h3>';
	echo '<div>';
	echo '<span class="description">Please complete the details below to create the initial Live Help operator account.  Once you have created the initial account you can continue to create accounts from within the Live Help operator application.</span><br/>';
	echo '</div>';
}

function livehelp_reset_account_details_text(){
	echo '<div><h3>Reset Operator Account</h3>';
	echo '<div>';
	echo '<span class="description">Please complete the details below to reset Live Help Administrator operator account.  You can create additional accounts from within the Live Help operator application.</span><br/>';
	echo '</div>';
}

function livehelp_database_details_text(){

	global $operators;
	global $schema;

	// Password Strength Indicator
	echo '<div style="margin-left:230px">';
	echo '<br/><div id="pass-strength-result">Strength indicator</div><br/><br/>';
	echo '<div class="description indicator-hint">Hint: The password should be at least seven characters long. To make it stronger, use upper and lower case letters, numbers and symbols like ! " ? $ % ^ &amp;</div><br/>';
	echo '</div>';
	
	// Check Database Schema
	if ($schema == true) {
	
		// Create / Reset Account Button
		if ($operators > 0) {
			echo '<div><input name="ResetAccountSubmit" class="button" type="submit" value="'. esc_attr('Reset Account') .'" /></div><br/>';
		} else {
			echo '<div><input name="CreateAccountSubmit" class="button" type="submit" value="'. esc_attr('Create Account') .'" /></div><br/>';
		}
		
	}
	
	echo '<h3>Database Schema</h3>';
	echo '<div class="description">The Live Help MySQL database schema is automatically installed within the WordPress MySQL database.</div><br/>';
	echo '<div><input name="InstallSubmit" class="button" type="submit" value="'. esc_attr('Install Database Schema') .'" /></div><br/>';
	echo '<div><input name="DeleteSubmit" class="button" type="submit" value="'. esc_attr('Delete Database Schema') .'" /></div><br/>';
	echo '<span class="description"><strong>Note:</strong> The database schema will be automatically installed when you activate the Live Help plugin and also deleted when you delete the Live Help plugin from the WordPress Plugins section.  You can manually install and remove the MySQL database schema using the buttons above.</span><br/>';
	echo '</div><br/>';
}

function livehelp_options_validate($input){
	
	// Reset Database
	if (isset($_REQUEST['DeleteSubmit'])) {
	
		// Error Message
		add_settings_error('livehelp_options', 'reset_database', 'Live Help Database Schema Deleted Sucessfully', 'updated');
		
		// Uninstall Plugin
		livehelp_plugin_uninstall();
		
		return;
	}
	
	// Install Database
	if (isset($_REQUEST['InstallSubmit'])) {
	
		// Error Message
		add_settings_error('livehelp_options', 'install_database', 'Live Help Database Schema Installed Sucessfully', 'updated');
		
		// Uninstall Plugin
		livehelp_plugin_install();
		
		return;
	}
	
	// Create Operator Account
	if (isset($_REQUEST['CreateAccountSubmit'])) {
	
		$username = $input['username'];
		$password = $input['password'];
		$passwordretype = $input['passwordretype'];
		
		if (empty($username)) {
			// Empty Username
			add_settings_error('livehelp_options', 'create_account_password', 'Operator Account Error - Username Empty', 'error');
			return;
		}
		
		if (empty($password)) {
			// Empty Password Error
			add_settings_error('livehelp_options', 'create_account_password', 'Operator Account Error - Password Empty', 'error');
			return;
		}
		
		if ($password != $passwordretype) {
			// Mismatched Password Error
			add_settings_error('livehelp_options', 'create_account_mismatch', 'Operator Account Error - Passwords Mismatch', 'error');
			return;
		}
	
		// Create Operator Account
		livehelp_create_account($username, $password);
		return;
	}
	
	// Reset Operator Account
	if (isset($_REQUEST['ResetAccountSubmit'])) {
	
		$id = $input['id'];
		$username = $input['username'];
		$password = $input['password'];
		$passwordretype = $input['passwordretype'];
		
		if (empty($username)) {
			// Empty Username
			add_settings_error('livehelp_options', 'reset_account_password', 'Operator Account Error - Username Empty', 'error');
			return;
		}
		
		if (!empty($password) && $password != $passwordretype) {
			// Mismatched Password Error
			add_settings_error('livehelp_options', 'reset_account_mismatch', 'Operator Account Error - Passwords Mismatch', 'error');
			return;
		}
	
		// Reset Operator Account
		livehelp_reset_account($id, $username, $password);
		return;
	}
	
	// Site URL
	$newinput['url'] = esc_url_raw(trim($input['url']));

	// Live Chat Embedded
	if ($input['embedded'] == '0' || $input['embedded'] == '1') {
		$newinput['embedded'] = (bool)$input['embedded'];
	}
	
	// Live Chat Slider Tab
	if ($input['slider'] == '0' || $input['slider'] == '1') {
		$newinput['slider'] = (bool)$input['slider'];
	}
	
	return $newinput;
}

?>