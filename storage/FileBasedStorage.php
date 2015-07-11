<?php
namespace storage;

require_once('config.php');
use model\User;
use TimeSheetConfig;

/**
 * Class FileBasedStorage File based storage implementation
 * @package storage
 */
class FileBasedStorage
{
    private $all_users;

    public function store(User $user) {
        $this->init();
        if (! $this->all_users[$user->getId()]) {
            echo "storing new user\n";
            $create = new User($user->getId(), $user->getName());
            //TODO
//            $create->setFreeDays($user->getFreeDays());
            $this->all_users[] = $create;
        } else {
            echo "updating existing user\n";
            $update = $this->all_users[$user->getId()];
            $update->setName($user->getName());
            //TODO
//            $update->setFreeDays($user->getFreeDays());
        }
        $this->write_users();
    }

    private function init()
    {
        if (!$this->all_users) {
            echo "initializing new array\n";
            $this->all_users = array();
            $this->read_users();
        }
    }

    private function read_users()
    {
        $file = file_get_contents(TimeSheetConfig::DATA_DIR."/people.json");
        if ($file) {
            $decoded = json_decode($file);
            foreach ($decoded as $read) {
                $current = new User($read->id, $read->name);
                $this->all_users[$current->getId()] = $current;
            }
        }
    }

    private function write_users()
    {
        $result = array();
        foreach($this->all_users as $user) {
            $user_array = array();
            $user_array["id"] = $user->getId();
            $user_array["name"] = $user->getName();
            $user_array["days"] = array();

            $result[] = $user_array;
        }
        $json_string = json_encode($result);
        echo $json_string;
        file_put_contents(TimeSheetConfig::DATA_DIR."/people.json", $json_string);
    }
}