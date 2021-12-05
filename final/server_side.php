<?php
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Headers: *");
        require_once(__DIR__ . '/vendor/giphy-php-client/autoload.php');

        $api_instance = new GPH\Api\DefaultApi();
        $api_key = $_SERVER["GIPHYAPIKEY"]; // string | Giphy API Key.
        $q = $_POST['search'];
        $limit = 10; // int | The maximum number of records to return.
        $offset = $_POST['offset']; // int | An optional results offset. Defaults to 0.
        $rating = "g"; // string | Filters results by specified rating.
        $lang = "en"; // string | Specify default country for regional content; use a 2-letter ISO 639-1 country code. See list of supported languages <a href = \"../language-support\">here</a>.
        $fmt = "json"; // string | Used to indicate the expected response format. Default is Json.

        try {
            $result = $api_instance->gifsSearchGet($api_key, $q, $limit, $offset, $rating, $lang, $fmt);
            $dataResponse = $result["data"];

            foreach($dataResponse as $data) {
                $urlArrActual[] = $data["embed_url"];
            }
            echo json_encode($urlArrActual);
        } catch (Exception $e) {
         
          echo 'Exception when calling DefaultApi->gifsSearchGet: ', $e->getMessage(), PHP_EOL;
        }
?>