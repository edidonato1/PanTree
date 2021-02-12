class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  
  def index
    @users = User.all

    render json: @users
  end


  def show
    render json: @user, include: [:pantry, :lists, :foods]
  end


  def create
    @user = User.new(user_params)
    @user.dark_mode = true


    if @user.save
      @token = encode({id: @user.id})
      @pantry = Pantry.create(user_id: @user.id)
      render json: {
        user: @user.attributes.except("password_digest"),
        token: @token
      }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end


  def update
    if @user.update(params.require(:user).permit(:username, :password, :dark_mode))
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end


  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    def user_params 
      params.require(:user).permit( :username, :password)
    end

end