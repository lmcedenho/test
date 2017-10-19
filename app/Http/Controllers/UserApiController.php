<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserApiController extends Controller
{
    /**
	 * Add an User.
	 *
	 * @param Request $request
	 *
	 * @return Response
	 */
	public function addUser(Request $request)
	{
	    $input = $request->all();

	    $user = User::create($input);

	    if($user){
	    	return [ 'status_code' => 0 ];
	    }	
	    
		return [ 'status_code' => 'error' ];
	}

	/**
	 * Activate an User.
	 *
	 * @param Request $request
	 *
	 * @return Response
	 */
	public function activateUser(Request $request)
	{
	    $user = $this->getUserByUsername($request->username);

	    if($user){
	    	$user->update(['status' => 1]);
	    	return [ 'status_code' => 0 ];
	    }	

	    return [ 'status_code' => 'error' ];
	}

	/**
	 * Desactivate an User.
	 *
	 * @param Request $request
	 *
	 * @return Response
	 */
	public function desactivateUser(Request $request)
	{
	    $user = $this->getUserByUsername($request->username);

	    if($user){
	    	$user->update(['status' => 0]);
	    	return [ 'status_code' => 0 ];
	    }	

	    return [ 'status_code' => 'error' ];	    
	}

	/**
	 * get User.
	 *
	 * @param Request $request
	 *
	 * @return Response
	 */
	public function getUser($username)
	{
	    $user = $this->getUserByUsername($username);

	    if($user){
	    	$user = [
	    		'username' => $username,
	    		'email' => $user->email,
	    		'password' => $user->password
	    	];
	    	return $user;
	    }	
	    return [ 'status_code' => 'error' ];	    
	}

	private function getUserByUsername($username)
	{
		return User::where('username', $username)->first();
	}
}
