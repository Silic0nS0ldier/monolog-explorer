<?php
declare(strict_types=1);

namespace App\Actions;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

/**
 * Base class for server actions.
 */
abstract class Action
{
    /**
     * PSR-7 server request object. Note that the PSR-7 response object is not assigned to the class
     * as most interactions are immutable (keeping the original around will just hurt memory and
     * encourage mistakes).
     */
    protected Request $request;

    public function __invoke(Request $request, Response $response) : Response
    {
        $this->request = $request;
        return $this->perform($response);
    }

    public abstract function perform(Response $response) : Response;
}
