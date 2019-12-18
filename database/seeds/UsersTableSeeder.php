<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Role;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name' => 'admin',
                'email' => 'admin@mail.com',
                'password' => bcrypt('secret'),
                'role_id' => 0,
            ],
            [
                'name' => 'First User',
                'email' => 'firstuser@mail.com',
                'password' => bcrypt('secret'),
                'role_id' => 1,
            ],
            [
                'name' => 'Second User',
                'email' => 'seconduser@mail.com',
                'password' => bcrypt('secret'),
                'role_id' => 1,
            ],
            [
                'name' => 'Third User',
                'email' => 'thirduser@mail.com',
                'password' => bcrypt('secret'),
                'role_id' => 1,
            ],[
                'name' => 'Fourth User',
                'email' => 'fourthuser@mail.com',
                'password' => bcrypt('secret'),
                'role_id' => 1,
            ],
        ];

        foreach($users as $user)
        {
            $user_model = new User($user);
            $user_model->password = $user["password"];
            $user_model->role_id = $user["role_id"];
            $user_model->email = $user["email"];
            $user_model->name = $user["name"];
            $user_model->save();
        }

    }
}
