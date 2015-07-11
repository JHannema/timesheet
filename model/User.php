<?php
namespace model;


class User
{
    private $id;
    private $name;
    private $free_days;

    /**
     * User constructor.
     * @param $name
     * @param $id
     */
    public function __construct($id, $name)
    {
        $this->id = $id;
        $this->name = $name;
    }

    public function jsonSerialize()
    {
        $result = array();
        $result['id'] = $this->id;
        $result['name'] = $this->name;
        return $result;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getFreeDays()
    {
        return $this->free_days;
    }

    /**
     * @param mixed $day
     */
    public function addFreeDay($day)
    {
        $this->free_days[] = $day;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }
}