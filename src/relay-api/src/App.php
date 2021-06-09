<?php
declare(strict_types=1);

namespace App;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Slim\Psr7\Factory\ResponseFactory;

class App
{
    public static function boot() : void
    {
        $app = AppFactory::create(new ResponseFactory());

        $app->get('/', function (Request $request, Response $response) : Response {
            $response->getBody()->write(json_encode([ 'success' => false ]));
            return $response->withHeader('Content-Type', 'application/json');
        });

        $app->run();
    }
}
