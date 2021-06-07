<?php
declare(strict_types=1);

namespace App\Responses;

use Psr\Http\Message\ResponseInterface as Response;

class JsonResponse
{
    /**
     * Modifies an existing response to return some data as JSON.
     */
    public static function success(Response $response, $data) : Response
    {
        $response = $response->withHeader('Content-Type', 'application/json');
        $response->getBody()->write(json_encode([
            'success' => true,
            'data' => $data,
        ]));

        return $response;
    }
}
