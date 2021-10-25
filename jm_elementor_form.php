<?php
/**
 * Plugin Name: john mogi elementor form
 * Plugin URI: https://www.johnmogi.com
 * Description: a simple plugin to hook into elementor forms, send data via a webhook and do some demo calculations.
 * Version: 1.0
 * Author: John Mogi
 * Author URI: https://www.johnmogi.com
 */


add_action( 'elementor_pro/forms/new_record', function( $record, $handler ) {
    $form_name = $record->get_form_settings( 'newAccount' );

    if ( 'newAccount' !== $form_name ) {
        return;
    }

    $raw_fields = $record->get( 'fields' );
    $fields = [];
    foreach ( $raw_fields as $id => $field ) {
        $fields[ $id ] = $field['value'];
    }

    wp_remote_post( 'https://webhook.site/b9f158fc-a0ce-4ac1-956d-9ce7d4c819f9', [
        'body' => $fields,
    ]);
}, 10, 2 );
