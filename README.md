# Theme Widget for the Kount Application by Mozu

This repository contains files for the theme widget that accompanies the [Kount Application by Mozu](http://mozu.github.io/IntegrationDocuments/Kount/Mozu_Kount_App.htm). You can add this widget to the checkout page of your Mozu site(s) to capture customers’ browser information for inclusion in Kount fraud screening.

This repository is structured to mirror the file structure of the [Mozu Core Theme](https://github.com/Mozu/core-theme), but only the necessary files for the widget are included. These files are based off Mozu Core 5, but widget functionality has been tested on all subsequent Core them versions, through Core 9.

##Widget Files

This widget adds the following files:
*	`resources/admin/widgets/28_fraud_detection.png`
* `scripts/widgets/kount.js`
* `templates/widgets/kount/kount-logo.hypr`

And updates the following file:
* `theme.json`

##Update Your Theme

1.	Clone or download this repository.
2.	Add or merge the files listed above. 
3.	Run Grunt to build the theme.
4.	Upload the resulting ZIP file to Mozu Dev Center.
5.	Install the updated theme to the sandbox you’re working in.
6.	In Mozu Admin, go to **SiteBuilder** > **Themes**, right-click the new theme, and click **Apply**.

##Add the Widget to Your Checkout Page

1.	In Mozu Admin, go to **SiteBuilder** > **Editor**.
2.	In the **Site tree**, navigate to **Templates** > **Checkout**.
3.	Click the **Widgets** button at the top of the editor.
4.	Drag the **Kount Fraud Detection** widget to any dropzone on the checkout page. The widget is not visible to customers, so placement on the page is not important. 

That’s it! No further configuration is necessary.

For more information about the Kount Application by Mozu or other applications, visit the [Mozu App Marketplace](https://www.mozu.com/ecommerce-app-center/).

