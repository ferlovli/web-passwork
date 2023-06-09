<?php
/**
 * Plugin support: Booked Appointments
 *
 * @package ThemeREX Addons
 * @since v1.5
 */

// Don't load directly
if ( ! defined( 'TRX_ADDONS_VERSION' ) ) {
	exit;
}

if ( ! function_exists( 'trx_addons_exists_booked' ) ) {
	/**
	 * Check if Booked Appointments is installed and activated
	 *
	 * @return bool  True if plugin is installed and activated
	 */
	function trx_addons_exists_booked() {
		return class_exists( 'booked_plugin' );
	}
}
	
if ( ! function_exists( 'trx_addons_booked_not_defer_scripts' ) ) {
	add_filter( "trx_addons_filter_skip_move_scripts_down", 'trx_addons_booked_not_defer_scripts' );
	add_filter( "trx_addons_filter_skip_async_scripts_load", 'trx_addons_booked_not_defer_scripts' );
	/**
	 * Add plugin-specific slugs to the list of scripts that should not be deferred or loaded asynchronously
	 * 
	 * @hooked trx_addons_filter_skip_move_scripts_down
	 * @hooked trx_addons_filter_skip_async_scripts_load
	 *
	 * @param array $list List of scripts to skip defer/async
	 * 
	 * @return array      Modified list
	 */
	function trx_addons_booked_not_defer_scripts( $list ) {
		if ( trx_addons_exists_booked() ) {
			$list[] = 'spin.min.js';
		}
		return $list;
	}
}

if ( ! function_exists( 'trx_addons_booked_create_empty_post_on_404' ) ) {
	add_action( 'wp_head', 'trx_addons_booked_create_empty_post_on_404', 1 );
	add_filter( 'display_post_states', 'trx_addons_booked_create_empty_post_on_404', 1 );
	/**
	 * Create empty post (global variable) on 404 page to prevent errors in the Booked plugin
	 *
	 * @param bool $states  Current state
	 * 
	 * @return bool  	    Not modified state
	 */
	function trx_addons_booked_create_empty_post_on_404($states=false) {
		if ( trx_addons_exists_booked() && ( is_404() || current_filter() == 'display_post_states' ) ) {
			// Create empty object 'post'
			if ( ! isset( $GLOBALS['post'] ) ) {
				$GLOBALS['post'] = new stdClass();
				$GLOBALS['post']->ID = 0;
				$GLOBALS['post']->post_type = 'unknown';
				$GLOBALS['post']->post_content = '';
			}
			// Add 'post_status' to the object 'post' if it not exists
			if ( ! isset( $GLOBALS['post']->post_status ) ) {
				$GLOBALS['post']->post_status = 'unknown';
			}
		}
		return $states;
	}
}

if ( ! function_exists( 'trx_addons_booked_load_scripts_front' ) ) {
	add_action( "wp_enqueue_scripts", 'trx_addons_booked_load_scripts_front', TRX_ADDONS_ENQUEUE_SCRIPTS_PRIORITY );
	add_action( 'trx_addons_action_pagebuilder_preview_scripts', 'trx_addons_booked_load_scripts_front', 10, 1 );
	/**
	 * Enqueue custom styles and scripts for Booked Appointments plugin on the front
	 * 
	 * @hooked wp_enqueue_scripts
	 * @hooked trx_addons_action_pagebuilder_preview_scripts
	 * 
	 * @trigger trx_addons_action_load_scripts_front
	 * 
	 * @param bool $force  Force load scripts
	 */
	function trx_addons_booked_load_scripts_front( $force = false ) {
		static $loaded = false;
		if ( ! trx_addons_exists_booked() ) {
			return;
		}
		$debug    = trx_addons_is_on( trx_addons_get_option( 'debug_mode' ) );
		$optimize = ! trx_addons_is_off( trx_addons_get_option( 'optimize_css_and_js_loading' ) );
		$preview_elm = trx_addons_is_preview( 'elementor' );
		$preview_gb  = trx_addons_is_preview( 'gutenberg' );
		$theme_full  = current_theme_supports( 'styles-and-scripts-full-merged' );
		$need        = ! $loaded && ( ! $preview_elm || $debug ) && ! $preview_gb && $optimize && (
						$force === true
							|| ( $preview_elm && $debug )
							|| trx_addons_sc_check_in_content( array(
									'sc' => 'booked',
									'entries' => array(
										array( 'type' => 'sc',  'sc' => 'booked-calendar' ),
										array( 'type' => 'sc',  'sc' => 'booked-login' ),
										array( 'type' => 'sc',  'sc' => 'booked-profile' ),
										array( 'type' => 'sc',  'sc' => 'booked-appointments' ),
										//array( 'type' => 'gb',  'sc' => 'wp:trx-addons/events' ),	// This sc is not exists for GB
										array( 'type' => 'elm', 'sc' => '"widgetType":"wp-widget-booked_calendar"' ),
										array( 'type' => 'elm', 'sc' => '"widgetType":"trx_sc_booked_calendar"' ),
										array( 'type' => 'elm', 'sc' => '"widgetType":"trx_sc_booked_login"' ),
										array( 'type' => 'elm', 'sc' => '"widgetType":"trx_sc_booked_profile"' ),
										array( 'type' => 'elm', 'sc' => '"widgetType":"trx_sc_booked_appointments"' ),
										array( 'type' => 'elm', 'sc' => '"shortcode":"[booked-' ),
									)
								) )
							);
		if ( ! $loaded && ! $preview_gb && ( ( ! $optimize && $debug ) || ( $optimize && $need ) ) ) {
			$loaded = true;
			do_action( 'trx_addons_action_load_scripts_front', $force, 'booked' );
		}
		if ( ! $loaded && $preview_elm && $optimize && ! $debug && ! $theme_full ) {
			do_action( 'trx_addons_action_load_scripts_front', false, 'booked', 2 );
		}
	}
}

if ( ! function_exists( 'trx_addons_booked_check_in_html_output' ) ) {
//	add_filter( 'trx_addons_filter_get_menu_cache_html', 'trx_addons_booked_check_in_html_output', 10, 1 );
//	add_action( 'trx_addons_action_show_layout_from_cache', 'trx_addons_booked_check_in_html_output', 10, 1 );
	add_action( 'trx_addons_action_check_page_content', 'trx_addons_booked_check_in_html_output', 10, 1 );
	/**
	 * Check if the output html contains specific shortcode and load required styles and scripts if found
	 * 
	 * @hooked trx_addons_action_check_page_content
	 *
	 * @param string $content   Page content
	 * 
	 * @return string  	   Page content
	 */
	function trx_addons_booked_check_in_html_output( $content = '' ) {
		if ( trx_addons_exists_booked()
			&& ! trx_addons_need_frontend_scripts( 'booked' )
			&& ! trx_addons_is_off( trx_addons_get_option( 'optimize_css_and_js_loading' ) )
		) {
			$checklist = apply_filters( 'trx_addons_filter_check_in_html', array(
							'class=[\'"][^\'"]*booked-',
							'class=[\'"][^\'"]*type\\-booked_appointments',
							'class=[\'"][^\'"]*booked_custom_calendars\\-',
							),
							'booked'
						);
			foreach ( $checklist as $item ) {
				if ( preg_match( "#{$item}#", $content, $matches ) ) {
					trx_addons_booked_load_scripts_front( true );
					break;
				}
			}
		}
		return $content;
	}
}

if ( ! function_exists( 'trx_addons_booked_filter_head_output' ) ) {
	add_filter( 'trx_addons_filter_page_head', 'trx_addons_booked_filter_head_output', 10, 1 );
	/**
	 * Remove plugin-specific styles from the page head output if optimize CSS loading is 'full'
	 * 
	 * @hooked trx_addons_filter_page_head
	 *
	 * @param string $content   Page head content
	 * 
	 * @return string  	        Modified page head content
	 */
	function trx_addons_booked_filter_head_output( $content = '' ) {
		if ( trx_addons_exists_booked()
			&& trx_addons_get_option( 'optimize_css_and_js_loading' ) == 'full'
			&& ! trx_addons_is_preview()
			&& ! trx_addons_need_frontend_scripts( 'booked' )
			&& apply_filters( 'trx_addons_filter_remove_3rd_party_styles', true, 'booked' )
		) {
			$content = preg_replace( '#<link[^>]*href=[\'"][^\'"]*/booked/[^>]*>#', '', $content );
		}
		return $content;
	}
}

if ( ! function_exists( 'trx_addons_booked_filter_body_output' ) ) {
	add_filter( 'trx_addons_filter_page_content', 'trx_addons_booked_filter_body_output', 10, 1 );
	/**
	 * Remove plugin-specific styles from the page body output if optimize CSS loading is 'full'
	 * 
	 * @hooked trx_addons_filter_page_content
	 *
	 * @param string $content   Page body content
	 * 
	 * @return string  	        Modified page body content
	 */
	function trx_addons_booked_filter_body_output( $content = '' ) {
		if ( trx_addons_exists_booked()
			&& trx_addons_get_option( 'optimize_css_and_js_loading' ) == 'full'
			&& ! trx_addons_is_preview()
			&& ! trx_addons_need_frontend_scripts( 'booked' )
			&& apply_filters( 'trx_addons_filter_remove_3rd_party_styles', true, 'booked' )
		) {
			$content = preg_replace( '#<link[^>]*href=[\'"][^\'"]*/booked/[^>]*>#', '', $content );
			$content = preg_replace( '#<script[^>]*src=[\'"][^\'"]*/booked/[^>]*>[\\s\\S]*</script>#U', '', $content );
			$content = preg_replace( '#<script[^>]*id=[\'"]booked-[^>]*>[\\s\\S]*</script>#U', '', $content );
		}
		return $content;
	}
}


// Add shortcodes
//----------------------------------------------------------------------------

// Add shortcodes to Elementor
if ( trx_addons_exists_booked() && trx_addons_exists_elementor() && function_exists('trx_addons_elm_init') ) {
	require_once TRX_ADDONS_PLUGIN_DIR . TRX_ADDONS_PLUGIN_API . 'booked/booked-sc-elementor.php';
}

// Add shortcodes to VC
if ( trx_addons_exists_booked() && trx_addons_exists_vc() && function_exists( 'trx_addons_vc_add_id_param' ) ) {
	require_once TRX_ADDONS_PLUGIN_DIR . TRX_ADDONS_PLUGIN_API . 'booked/booked-sc-vc.php';
}


// Demo data install
//----------------------------------------------------------------------------

// One-click import support
if ( is_admin() ) {
	require_once TRX_ADDONS_PLUGIN_DIR . TRX_ADDONS_PLUGIN_API . 'booked/booked-demo-importer.php';
}

// OCDI support
if ( is_admin() && trx_addons_exists_booked() && function_exists( 'trx_addons_exists_ocdi' ) && trx_addons_exists_ocdi() ) {
	require_once TRX_ADDONS_PLUGIN_DIR . TRX_ADDONS_PLUGIN_API . 'booked/booked-demo-ocdi.php';
}
