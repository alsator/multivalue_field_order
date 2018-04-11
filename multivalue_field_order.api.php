<?php
/**
 * Created by PhpStorm.
 * User: alsator
 * Date: 09/04/2018
 * Time: 22:30
 */

/**
 * implements hook_custom_multivalue_field_options_alter
 */
function my_module_custom_multivalue_field_options_alter(&$options){
//  options to be displayed ad field settings form
}

/**
 * implements hook_custom_multivalue_field_sort_alter
 */
function my_module_custom_multivalue_field_sort_alter(&$array, $field_type, $parsed_field_order){
// array to be sorted
}