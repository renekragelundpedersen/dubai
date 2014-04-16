<?php
/*
Plugin Name: Live Help
Plugin URI: http://livehelp.stardevelop.com/
Description: Live Help allows you to easily add the Live Help HTML code to your WordPress blog.  The JavaScript code will be added and you can also use the Live Help widget to display the Online / Offline button. Requires the Live Help Server Software starting at US$159.95.
Author: Stardevelop Pty Ltd
Version: 1.60
Author URI: http://livehelp.stardevelop.com/
*/

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
			return;
		}
		echo '<div class="updated"><p><a href="options-general.php?page=livehelp">Live Help</a> needs attention: Could not locate the Live Help Installation at ' . $url . '/livehelp/. Please enter the URL where Live Help is installed within the Settings.</p></div>';
		return;
		
	} else {
	
		if (@fopen($script, 'r') == true) {
			return;
		}
		echo '<div class="error"><p><a href="options-general.php?page=livehelp">Live Help</a> needs attention: Could not locate the Live Help Installation at ' . $url . '/livehelp/. Please enter the URL where Live Help is installed within the Settings.</p></div>';
		return;
	}
}

function livehelp_admin_menu() {
	// Admin Notices
	add_action('admin_notices', 'livehelp_admin_notices');
	add_options_page('Live Help', 'Live Help', 'manage_options', 'livehelp', 'livehelp_options_page');  
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
	echo '<input name="Submit" class="button-primary" type="submit" value="'. esc_attr('Save Changes') .'" /></form></div>';  
} 

// Fill the Menu page with content
function livehelp_admin_init(){

	// Register Settings
	register_setting('livehelp_options', 'livehelp_options', 'livehelp_options_validate');
	
	// General Settings
	add_settings_section('the_livehelp', '', 'livehelp_details_text', 'livehelp');
	add_settings_field('livehelp_field', 'Live Help Installation URL', 'livehelp_url_field_display', 'livehelp', 'the_livehelp');
	add_settings_field('livehelp_embedded_field', 'Embedded Chat', 'livehelp_embedded_field_display', 'livehelp', 'the_livehelp');
	add_settings_field('livehelp_slider_field', 'Invite Tab', 'livehelp_slider_field_display', 'livehelp', 'the_livehelp');
	
}
add_action('admin_init', 'livehelp_admin_init');

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

function livehelp_details_text(){

	// Site URL
	if ($_SERVER['SERVER_PORT'] == '443') {	$protocol = 'https://'; } else { $protocol = 'http://'; }
	$url = $protocol . $_SERVER['HTTP_HOST'] . '/livehelp';

	echo "<p>Enter the URL where Live Help is installed.  You only need to setup the URL if your Live Help is installed on a different server or sub-domain.</p>";
}

function livehelp_options_validate($input){
	
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