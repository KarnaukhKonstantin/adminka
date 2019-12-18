<?php

use Illuminate\Database\Seeder;
use App\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            [
                'name' => 'admin',
            ],
            [
                'name' => 'user',
            ]
        ];
        foreach($roles as $role)
        {
            $role_model = new Role($role);
            $role_model->name = $role["name"];
            $role_model->save();
        }
    }
}
