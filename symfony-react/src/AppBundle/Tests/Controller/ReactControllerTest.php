<?php

namespace AppBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ReactControllerTest extends WebTestCase
{
    public function testCounter()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/counter');
    }

    public function testHello()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/hello');
    }

}
