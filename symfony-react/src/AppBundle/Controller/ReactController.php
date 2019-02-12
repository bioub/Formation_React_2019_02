<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class ReactController extends Controller
{
    /**
     * @Route("/counter")
     */
    public function counterAction()
    {
        return $this->render('React/counter.html.twig', array(
            // ...
        ));
    }

    /**
     * @Route("/hello")
     */
    public function helloAction()
    {
        return $this->render('React/hello.html.twig', array(
            // ...
        ));
    }

}
