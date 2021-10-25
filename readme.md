## WordPress Landing Page plugin using design

WordPress Developer - Exam
Please follow the instructions, and please follow security precautions, such as XSS, SQL
Injection.
1. Create a WordPress Landing Page using design via Zeplin
a. Link for design: <removed>
b. Funnel should be fully responsive, Desktop, Tablet and Mobile - including
Macbook Resolutions
c. In Landing Page design, there is a calculator, it needs to be functional, left
input is the field to enter numbers, and the right input should display the
calculation.
d. Calculation: multiplication in ranges, (from 1 to 200 multiple by 2, from 201 to
500 multiple by 2.5, and from 501 forward multiply by 3)
e. Calculator should have error handling (display message if no input was
provided or characters not allowed)
2. Create a plugin called Elementor Extension Form
a. The plugin should send the user registration data to https://webhook.site/ - a
temporary webhook via Elementor Form.
b. The Form should send First name, Last name, Email of the user.
c. Bonus - The Elementor Extension Form should add the option of sending to
https://webhook.site/ via Actions After Submit widget.
d. The plugin should be installable through the WordPress plugin area.
e. implement the plugin to the creative from task 1.



there are 3 actions that are needed here.

1st - hook into a simple elementor form and apply the calculations attached in the included js file.

2nd - hook into the second elementor form and send it's data to a webhook.


the building process:
1. mkdir plugins/name_of_plugin
2. cd nop + touch name_of_plugin.php
3. plugin info: 
<?php
/**
 * Plugin Name: john mogi elementor form
 * Plugin URI: https://www.johnmogi.com
 * Description: a simple plugin to hook into elementor forms, send data via a webhook and do some demo calculations.
 * Version: 1.0
 * Author: John Mogi
 * Author URI: https://www.johnmogi.com
 */

<!-- ?> -->

 <!-- 0.  the actual data:
The plugin generated 2 characters of unexpected output during activation. If you notice “headers already sent” messages, problems with syndication feeds or other issues, try deactivating or removing this plugin. -->

"# php_form_to_webhook" 
# webhook_plugin
# webhook_plugin
# webhook_plugin
# elementor-webhook-plugin
