### Summary
This module allows to set an order of items of multivalue fields, field collections or nested field collections.
It works with integer, float, decimal, text, date fields, field collections and nested field collections.
### Configuration
Getting to the field multiple value opens select box containing options to sort items of the field.
### API
There are two hooks to implement for custom field:
1. hook_custom_multivalue_field_options_alter - to alter default options.
2. hook_custom_multivalue_field_sort_alter - to define a sort function.
